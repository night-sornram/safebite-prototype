import axios from "axios";

export const getOCR = async (text: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ocr?image_path=image/${text}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
