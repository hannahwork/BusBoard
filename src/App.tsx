import { useState } from 'react';
import './styles/App.css';
import { fetchArrivals } from '../backend/fetchArrivals';
import { fetchNearestStopsFromPostcode } from '../backend/fetchPostcodes';

function App() {

  const [arrivalsData, setArrivalsData] = useState<any[]>([])
  const [nearestStops, setNearestStops] = useState<any[]>([])
  const [stopCode, setStopCode] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [postCodeError, setPostCodeError] = useState<string>("");
  const [stopCodeError, setStopCodeError] = useState<string>("");

  const handleClick = async () => {
    if (stopCode.length === 0) {
      setStopCodeError("Please enter a valid stop code.");
      return;
    }
    const response = await fetchArrivals(stopCode);
    if (!response || response.length === 0) {
      setStopCodeError("No arrivals found for this stop code.");
      setArrivalsData([]);
    } else {
      setStopCodeError("");
    }
    setArrivalsData(response);
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopCode(event.target.value);
    if (event.target.value.length === 0) {
      setStopCodeError("Please enter a valid stop code.");
    } else {
      setStopCodeError("");
    }

  };

  const handlePostcodeUserInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCode(event.target.value);
    if (event.target.value.length === 0) {
      setPostCodeError("Please enter a valid postcode.");
    } else {
      setPostCodeError("");
    }
  };

  const handlePostcodeClick = async () => {
    if (postCode.length === 0) {
      setPostCodeError("Please enter a valid Post code.");
      return;
    }
    const response = await fetchNearestStopsFromPostcode(postCode)
    if (!response || (response).length === 0) {
      setPostCodeError("No stops near this Postcode.");
      setNearestStops([]);
    } else {
      setPostCodeError("");
    }
    setNearestStops(response);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center text-cyan-600 m-4">BusBoard</h1>
      <div className='get-input-and-button'>
        <input
          type="text"
          value={stopCode}
          onChange={handleUserInput}
          placeholder="Enter Stop Code"
          className="border p-2 m-4"
        />
        <button type='button' className="border p-2 m-4" onClick={handleClick}> Get Live Arrivals</button>
      </div>
      <div style={{ textAlign: 'center' }}>{stopCodeError && <div className="error-message">{stopCodeError}</div>}</div>
      <div className='arrivals-data-container'>
        {arrivalsData.length > 0 && (
          <table className="stop-point-buses-table">
            <thead className='table-header'>
              <tr>
                <th className='header-th'>Line</th>
                <th className='header-th' >Destination</th>
                <th className='header-th'>Time to Station (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {arrivalsData.map((bus, idx) => (
                <tr key={idx}>
                  <td className='table-info-row'>{bus.lineName}</td>
                  <td className='table-info-row'>{bus.destinationName}</td>
                  <td className='table-info-row'>{Math.floor(bus.timeToStation / 60)} minutes</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='get-input-and-button'>
        <input
          type="text"
          value={postCode}
          onChange={handlePostcodeUserInput}
          placeholder="Enter Postcode"
          className="border p-2 m-4"
        />
        <button type='button' className="border p-2 m-4" onClick={handlePostcodeClick}> Get Nearest 2 Stops</button>
      </div>
      <div style={{ textAlign: 'center' }}>{postCodeError && <div className="error-message">{postCodeError}</div>}</div>
      <div className='arrivals-data-container'>
        {nearestStops.length > 0 && (
          <table className="stop-point-buses-table">
            <thead className='table-header'>
              <tr>
                <th className='header-th'>Name</th>
                <th className='header-th'>Line</th>
                <th className='header-th'>Stop Point</th>
                <th className='header-th'>Distance</th>
              </tr>
            </thead>
            <tbody>
              {nearestStops.map((stop, idx) => (
                <tr key={idx}>
                  <td className='table-info-row'>{stop.commonName}</td>
                  <td className='table-info-row'>{stop.lines && stop.lines.length > 0 ? stop.lines.map((line: any) => line.name).join(', ') : 'No lines'}</td>
                  <td className='table-info-row'>{stop.stopLetter}</td>
                  <td className='table-info-row'>{Math.floor(stop.distance)} meters</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}

export default App
