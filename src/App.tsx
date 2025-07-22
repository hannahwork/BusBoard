import { useState } from 'react';
import { fetchArrivals } from '../backend/fetchArrivals';

function App() {

  const [arrivalsData, setArrivalsData] = useState<string>()
  const [stopCode, setStopCode] = useState<string>("");

  const  handleClick = async () =>{
    const response = await fetchArrivals();
    setArrivalsData(response);
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopCode(event.target.value);
  };

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
        <button type='button' onClick={handleClick}> Get live Arrivals</button>
        <div>{arrivalsData}</div>
    </div>
  )
}

export default App
