import React, { useState } from 'react';

const GPSButton = ({ onClick }) => {
  const [tracking, setTracking] = useState(false);

  const toggleTracking = () => {
    setTracking(!tracking);
    onClick(!tracking); // Notify the parent component when tracking is toggled
  };

  return (
    <button onClick={toggleTracking}>
      {tracking ? 'Stop Tracking' : 'Start Tracking'}
    </button>
  );
};

export default GPSButton;
