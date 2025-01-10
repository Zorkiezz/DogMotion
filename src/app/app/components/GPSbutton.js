import React, { useState, useEffect } from 'react';

const GPSButton = ({ onClick, onTrackingChange }) => {
  const [tracking, setTracking] = useState(false);
  const [trackingDuration, setTrackingDuration] = useState(0);

  useEffect(() => {
    let interval = null;
    if (tracking) {
      interval = setInterval(() => {
        setTrackingDuration(trackingDuration + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [tracking, trackingDuration]);

  const toggleTracking = () => {
    setTracking(!tracking);
    onClick(!tracking); // Notify the parent component when tracking is toggled
    onTrackingChange(!tracking); // Additionally notify the parent about the tracking state change
  };

  return (
    <div>
      <button onClick={toggleTracking}>
        {tracking ? 'Stop Tracking' : 'Start Tracking'}
      </button>
      {tracking && <p>Tracking duration: {trackingDuration} seconds</p>}
    </div>
  );
};

export default GPSButton;
