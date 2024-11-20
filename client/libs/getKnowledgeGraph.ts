import axios from "axios";

export const getKnowledgeGraph = async (text: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food/ingredients?food_name=${text}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
