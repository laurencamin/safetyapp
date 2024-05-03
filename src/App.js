import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import Map from './components/Map';
import GpsTracker from './components/GpsTracker';
import LocationHistory from './components/LocationHistory';
import EmergencyAlert from './components/EmergencyAlert';

function App() {
  const [location, setLocation] = useState(null);
  const [locationHistory, setLocationHistory] = useState([]);
  const [emergencyAlert, setEmergencyAlert] = useState(false);

  useEffect(() => {
    // Initialize GPS tracking
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AppContainer} />
        <Route path="/map" component={Map} />
        <Route path="/gps-tracker" component={GpsTracker} />
        <Route path="/location-history" component={LocationHistory} />
        <Route path="/emergency-alert" component={EmergencyAlert} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;