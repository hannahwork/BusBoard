import { useState } from 'react';
import { fetchArrivals } from '../backend/fetchArrivals';
import { fetchNearestStopsFromPostcode } from '../backend/fetchPostcodes';

function App() {

  const [arrivalsData, setArrivalsData] = useState<string>();
  const [nearestStops, setNearestStops] = useState<string>();
  const [stopCode, setStopCode] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const  handleClick = async () =>{
    const response = await fetchArrivals(stopCode);
    if (!response || response.length === 0) {
      setError("No arrivals found for this stop code.");
    } else {
      setError("");
    }
    setArrivalsData(response);
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopCode(event.target.value);
    if (event.target.value.length === 0) {
      setError("Please enter a valid stop code.");
    } else {
      setError("");
    }

  };

  const handlePostcodeUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCode(event.target.value);
    if (event.target.value.length === 0) {
      setError("Please enter a valid postcode.");
      return;
    }
    fetchNearestStopsFromPostcode(postCode)
      .then(stops => {
        if (stops.length === 0) {
          setError("No stops found near this postcode.");
        } else {
          setError("");
          console.log("Nearest Stops:", stops);
        }
      })
      .catch(err => {
        setError("Error fetching stops: " + err.message);
      });
    setNearestStops(stops => JSON.stringify(stops, null, 2));
  };
  
  const  handlePostcodeClick = async () =>{
    const response = fetchNearestStopsFromPostcode(postCode)
      if (!response || (await response).length === 0) {
      setError("No stops near this Postcode.");
    } else {
      setError("");
    }
    setNearestStops(await response);
  }

  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center text-cyan-600 m-4">BusBoard</h1>
        <input
          type="text"
          value={stopCode}
          onChange={handleUserInput}
          placeholder="Enter Stop Code"
          className="border p-2 m-4"
        />
        <button type='button' className="border p-2 m-4" onClick={handleClick}> Get Live Arrivals</button>
        <div>{arrivalsData}</div>

        <input
          type="text"
          value={postCode}
          onChange={handlePostcodeUserInput}
          placeholder="Enter Postcode"
          className="border p-2 m-4"
        />
        <button type='button' className="border p-2 m-4" onClick={handlePostcodeClick}> Get Nearest 2 Stops</button>
        <div>{nearestStops}</div>
    </div>
  )
}

export default App
