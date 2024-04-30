import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });

  useEffect(() => {
    LoadScript({
      googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    });
  }, []);

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        onLoad={(map) => setMap(map)}
      >
        {/* Add markers or other map features here */}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;