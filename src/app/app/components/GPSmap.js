import React, { useState, useEffect } from 'react';

const GPSMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    }
  }, []);

  return (
    <div>
      <h3>GPS Location</h3>
      {location ? (
        <p>
          Latitude: {location.lat}, Longitude: {location.lon}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GPSMap;
