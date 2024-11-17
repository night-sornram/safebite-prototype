from flask import Flask, jsonify, request
from flask_cors import CORS
from neo4j import GraphDatabase
from dotenv import load_dotenv
import os

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
        with self.driver.session() as session:
            result = session.run(query, parameters)
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

transector = Transector(uri=URI, user=USER, password=PASSWORD)

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
    app.run(debug=True, port=8080)