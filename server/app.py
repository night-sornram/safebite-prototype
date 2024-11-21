from flask import Flask, jsonify, request
from flask_cors import CORS
from neo4j import GraphDatabase
from dotenv import load_dotenv
import os
# import easyocr
# import cv2

load_dotenv()

URI = os.getenv('URI')
USER = os.getenv('USER')
PASSWORD = os.getenv('PASSWORD')

app = Flask(__name__)
CORS(app)




class Transector:

    
    def __init__(self, uri, user, password):
        self.uri = uri
        self.user = user
        self.password = password
        self.driver = GraphDatabase.driver(self.uri, auth=(self.user, self.password))

    def _execute_transaction(self, query, parameters=None):
        result = self.driver.session().run(query, parameters)
        return [record for record in result]

    def get_all_ingredients(self):
        query = """
        MATCH (i:Ingredient)
        RETURN i.name AS ingredient
        """
        result = self._execute_transaction(query)
        return [record["ingredient"] for record in result]

    def get_all_foods(self):
        query = """
        MATCH (f:Food)
        RETURN f.name AS food
        """
        result = self._execute_transaction(query)
        return [record["food"] for record in result]

    def get_ingredients_for_food(self, food_name):
        query = """
        MATCH (f:Food {name: $food_name})<-[:RECIPE]-(i:Ingredient)
        RETURN i.name AS ingredient
        """
        result = self._execute_transaction(query, parameters={"food_name": food_name})
        return [record["ingredient"] for record in result]

    def get_foods_for_ingredient(self, ingredient_name):
        query = """
        MATCH (f:Food)<-[:RECIPE]-(i:Ingredient {name: $ingredient_name})
        RETURN DISTINCT f.name AS food
        """
        result = self._execute_transaction(query, parameters={"ingredient_name": ingredient_name})
        return [record["food"] for record in result]

    def get_synonym_ingredients(self, ingredient_name):
        query = """
        MATCH (i:Ingredient {name: $ingredient_name})-[:SYNONYM]->(syn:Ingredient)
        RETURN syn.name AS synonym
        """
        result = self._execute_transaction(query, parameters={"ingredient_name": ingredient_name})
        return [record["synonym"] for record in result]

    def close(self):
        self.driver.close()


# Can't deploy this OCR code on Render because it limit resources for free tier
# class NutritionLabelOCR:
#     def __init__(self):
#         self.nutrition_keywords = [
#             "calories", "protein", "carbohydrates", "sugar", "fat",
#             "saturated fat", "trans fat", "fiber", "cholesterol", "sodium",
#             "vitamin", "calcium", "iron", "potassium", "dietary fiber",
#             "total fat", "monounsaturated fat", "polyunsaturated fat",
#             "omega-3", "omega-6", "omega-9", "vitamin A", "vitamin B1",
#             "vitamin B2", "vitamin B3", "vitamin B5", "vitamin B6",
#             "vitamin B7", "vitamin B9", "vitamin B12", "vitamin C",
#             "vitamin D", "vitamin E", "vitamin K", "magnesium", "phosphorus",
#             "zinc", "selenium", "copper", "manganese", "fluoride", "iodine",
#             "chromium", "molybdenum", "chloride", "biotin", "folate",
#             "pantothenic acid", "riboflavin", "niacin", "thiamin",
#             "pyridoxine", "cobalamin", "choline", "inositol", "carnitine",
#             "glucose", "fructose", "lactose", "maltose", "sucrose",
#             "starch", "glycogen", "dietary fiber", "soluble fiber",
#             "insoluble fiber", "alcohol", "caffeine", "water", "ash",
#             "energy", "polyols", "erythritol", "xylitol", "sorbitol",
#             "mannitol", "isomalt", "lactitol", "maltitol", "hydrolyzed protein",
#             "casein", "whey protein", "soy protein", "pea protein",
#             "rice protein", "hemp protein", "collagen", "gelatin",
#             "glutamine", "creatine", "beta-alanine", "citrulline",
#             "taurine", "arginine", "leucine", "isoleucine", "valine",
#             "methionine", "phenylalanine", "threonine", "tryptophan",
#             "histidine", "lysine", "alanine", "asparagine", "aspartic acid",
#             "cysteine", "glutamic acid", "glycine", "proline", "serine",
#             "tyrosine", 'reduce fat milk', 'skim milk', 'whole milk', 'salt', 'carbohydrate'
#         ]
#         self.reader = easyocr.Reader(['en'], gpu=False)  # Disable GPU to save resources

#     def extract_text(self, image_path):
#         processed_image = image_path
#         # EasyOCR expects image paths directly or numpy arrays
#         results = self.reader.readtext(processed_image, detail=0)
#         return "\n".join(results)

#     # This function is used to filter out only the nutrition-related words from the OCR result.
#     def get_nutrition_words(self, text):
#         words_found = []
#         for keyword in self.nutrition_keywords:
#             if keyword in text.lower():
#                 words_found.append(keyword)
#         return list(set(words_found))  

#     # This function is used to process the image and return only the nutrition words found.
#     def process_image(self, image_path):
#         raw_text = self.extract_text(image_path)
#         return self.get_nutrition_words(raw_text)
    
transector = Transector(uri=URI, user=USER, password=PASSWORD)
# ocr = NutritionLabelOCR()

# @app.route('/api/ocr', methods=['GET'])
# def ocr_image():
#     image_path = request.args.get('image_path')
#     nutrition_words = ocr.process_image(image_path)
#     return jsonify(nutrition_words)


@app.route('/api/ingredients', methods=['GET'])
def get_all_ingredients():
    ingredients = transector.get_all_ingredients()
    return jsonify(ingredients)

@app.route('/api/foods', methods=['GET'])
def get_all_foods():
    foods = transector.get_all_foods()
    return jsonify(foods)

@app.route('/api/food/ingredients', methods=['GET'])
def get_ingredients_for_food():
    food_name = request.args.get('food_name')
    ingredients = transector.get_ingredients_for_food(food_name)
    return jsonify(ingredients)

@app.route('/api/ingredient/foods', methods=['GET'])
def get_foods_for_ingredient():
    ingredient_name = request.args.get('ingredient_name')
    foods = transector.get_foods_for_ingredient(ingredient_name)
    return jsonify(foods)

@app.route('/api/ingredient/synonyms', methods=['GET'])
def get_synonym_ingredients():
    ingredient_name = request.args.get('ingredient_name')
    synonyms = transector.get_synonym_ingredients(ingredient_name)
    return jsonify(synonyms)

if __name__ == '__main__':
    app.run()
