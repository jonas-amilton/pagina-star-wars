import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export async function getFimls() {
  try {
    const response = await api.get('/films');

    return response.data;
  } catch (error) {
    return { error: true };
  }
}
