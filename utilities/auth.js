import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://example.com/auth',
});

export const login = async (username, password) => {
  try {
    const response = await auth.post('/login', { username, password });
    return response.data.token;
  } catch (error) {
    console.error(error);
    return null;
  }
};