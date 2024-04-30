import React, { useState, useEffect } from 'react';
import { Map } from './Map';
import { GpsTracker } from './GpsTracker';
import { api } from '../utils/api';

function App() {
  const [location, setLocation] = useState(null);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // Request location permission
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    // Send location update to API
    api.updateLocation(newLocation);
  };

  const handleAlert = () => {
    setAlert(true);
    // Send alert to API
    api.sendAlert();
  };

  return (
    <div className="app">
      <Map location={location} />
      <GpsTracker onLocationChange={handleLocationChange} />
      {alert && (
        <div className="alert">
          <p>Alert sent!</p>
        </div>
      )}
      <button onClick={handleAlert}>Send Alert</button>
    </div>
  );
}

export default App;
