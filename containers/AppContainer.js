import React from 'react';
import MapComponent from '../components/MapComponent';
import GpsTrackerComponent from '../components/GpsTrackerComponent';
import SafetyButtonComponent from '../components/SafetyButtonComponent';

const AppContainer = () => {
  return (
    <div>
      <MapComponent />
      <GpsTrackerComponent />
      <SafetyButtonComponent />
    </div>
  );
};

export default AppContainer;