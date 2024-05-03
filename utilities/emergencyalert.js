import React, { useState } from 'react';
import { sendEmergencyAlert } from '../api';

const EmergencyAlert = () => {
  const [emergencyAlert, setEmergencyAlert] = useState(false);
  const [location, setLocation] = useState(null);

  const handleEmergencyAlert = () => {
    sendEmergencyAlert(location).then(() => {
      setEmergencyAlert(true);
    });
  };

  return (
    <div>
      {emergencyAlert && (
        <Modal>
          <h2>Emergency Alert Sent!</h2>
          <p>
            Your location has been sent to the emergency services.
          </p>
        </Modal>
      )}
      <button onClick={handleEmergencyAlert}>Send Emergency Alert</button>
    </div>
  );
};

export default EmergencyAlert;