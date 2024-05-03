import React, { useState, useEffect } from 'react';
import { getLocationHistory } from '../api';

const LocationHistory = () => {
  const [locationHistory, setLocationHistory] = useState([]);

  useEffect(() => {
    getLocationHistory().then((data) => {
      setLocationHistory(data);
    });
  }, []);

  return (
    <div>
      <h2>Location History</h2>
      <table>
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {locationHistory.map((location, index) => (
            <tr key={index}>
              <td>{location.latitude}</td>
              <td>{location.longitude}</td>
              <td>{location.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationHistory;