import React, { useState, useEffect } from 'react';

const GpsTracker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setLocation(position.coords);
    });
  }, []);

  return (
    <div>
      {location && (
        <p>
          Latitude: {location.latitude}
          Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default GpsTracker;