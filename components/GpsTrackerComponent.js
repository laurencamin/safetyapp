import React, { useState, useEffect } from 'react';
import { geolocation } from 'react-native';

const GpsTrackerComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        setError(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <div>
      {location? (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default GpsTrackerComponent;