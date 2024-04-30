import React from 'react';

const SafetyButtonComponent = () => {
  const handleSafetyAlert = () => {
    // Send a request to the server to trigger a safety alert
    fetch('/api/safety-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location: 'Current location' }),
    })
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error(error));
  };

  return (
    <button onClick={handleSafetyAlert}>
      <img src="icon-safety.png" alt="Safety Button" />
      Safety Alert
    </button>
  );
};

export default SafetyButtonComponent;