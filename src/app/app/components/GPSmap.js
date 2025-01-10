import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GPSMap = () => {
  const [location, setLocation] = useState(null);
  const [map, setMap] = useState(null);

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
        <Map center={[location.lat, location.lon]} zoom={13} whenCreated={setMap}>
          <TileLayer
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>
              Your dog is here!
            </Popup>
          </Marker>
        </Map>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GPSMap;
