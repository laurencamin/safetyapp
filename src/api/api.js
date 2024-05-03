import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api',
});

export const getLocationHistory = async () => {
  try {
    const response = await api.get('/location-history');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const sendEmergencyAlert = async (location) => {
  try {
    await api.post('/emergency-alert', { location });
  } catch (error) {
    console.error(error);
  }
};