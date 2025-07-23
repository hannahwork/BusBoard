import axios from 'axios';

const API_KEY = import.meta.env.VITE_TFL_APP_KEY;


export const fetchCoordsFromPostcode = async (postcode: string) => {
  const response = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
  const { latitude, longitude } = response.data.result;
  return { latitude, longitude };
};

export const fetchStopsNearCoords = async (lat: number, lon: number) => {
  const url = `https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&radius=500&lat=${lat}&lon=${lon}&app_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.stopPoints.slice(0, 5);
};

export const fetchNearestStopsFromPostcode = async (postcode: string) => {
  const { latitude, longitude } = await fetchCoordsFromPostcode(postcode);
  const stops = await fetchStopsNearCoords(latitude, longitude);
  const data = stops;
  return data;
};