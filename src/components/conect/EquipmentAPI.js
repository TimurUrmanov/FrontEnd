import axios from 'axios';

// Отримати орендоване спорядження
export const getRentalGear = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/rental-gear');
    return response.data; 
  } catch (error) {
    console.error("Помилка при отриманні орендованого спорядження:", error);
    throw error;
  }
};

// Отримати спорядження для продажу
export const getSaleGear = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/sale-gear');
    return response.data; 
  } catch (error) {
    console.error("Помилка при отриманні спорядження для продажу:", error);
    throw error;
  }
};
