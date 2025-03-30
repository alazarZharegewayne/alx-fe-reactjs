import axios from 'axios';

export const searchUsers = async ({ query, location, minRepos, page = 1 }) => {
  try {
    let q = query;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>${minRepos}`;
    
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q,
        page,
        per_page: 10
      }
    });
    
    // Fetch additional details for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
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