const api = {
    sendSafetyAlert: (location) => {
      fetch('/api/safety-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location }),
      })
       .then((response) => response.json())
       .then((data) => console.log(data))
       .catch((error) => console.error(error));
    },
  };
  
  export default api;