import WebSocket from 'ws';

const WebSocketClient = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/ws');

    ws.onmessage = (event) => {
      const location = JSON.parse(event.data);
      setLocation(location);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (event) => {
      console.error(event);
    };
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

export default WebSocketClient;