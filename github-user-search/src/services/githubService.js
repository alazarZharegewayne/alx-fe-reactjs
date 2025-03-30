import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (params) => {
  try {
    const { query, location, minRepos, page = 1 } = params;
    
    let q = query;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>${minRepos}`;
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q,
        page,
        per_page: 10
      }
    });

    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`);
        return {
          ...user,
          ...userDetails.data
        };
      })
    );

    return {
      ...response.data,
      items: usersWithDetails
    };
  } catch (error) {
    throw error;
  }
};