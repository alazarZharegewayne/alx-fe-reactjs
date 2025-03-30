import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (searchParams) => {
  try {
    let query = `${searchParams.query || ''}`;
    if (searchParams.location) query += `+location:${searchParams.location}`;
    if (searchParams.minRepos) query += `+repos:>${searchParams.minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        page: searchParams.page || 1,
        per_page: searchParams.perPage || 10
      },
      headers: {
        ...(process.env.VITE_APP_GITHUB_TOKEN && {
          Authorization: `token ${process.env.VITE_APP_GITHUB_TOKEN}`
        })
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};