import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    LoadScript({
      googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    });
  }, []);

  return (
    <div>
      <GoogleMap
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={12}
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        onLoad={(map) => setMap(map)}
      >
        {map && (
          <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;