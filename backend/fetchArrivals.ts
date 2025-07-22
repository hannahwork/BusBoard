import axios from 'axios';

const API_KEY = import.meta.env.VITE_TFL_APP_KEY;
const STOP_CODE = "490008660N"

export async function fetchArrivals() {
  
  const response = await axios.get(`https://api.tfl.gov.uk/StopPoint/${STOP_CODE}/Arrivals?app_key=${API_KEY}`);
  const busData = response.data
  const sortedBusArrivals = Array.isArray(busData)
    ? [...busData].sort((a, b) => a.timeToStation - b.timeToStation)
    : [];
  return JSON.stringify(sortedBusArrivals, null, 2);
}



