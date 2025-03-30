import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};