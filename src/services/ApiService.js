import axios from "axios";

const apiUrl = 'http://localhost:8080/api/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}