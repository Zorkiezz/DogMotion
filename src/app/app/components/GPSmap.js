import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Platform } from 'react-native';

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
          <CircleMarker
            center={[location.lat, location.lon]}
            radius={100}
            color="blue"
            fillColor="#007bff"
            fillOpacity={0.5}
          >
            <Popup>
              This is the area where your dog was last seen.
            </Popup>
          </CircleMarker>
          {Platform.OS === 'ios' && (
            <div>
              <button onClick={() => console.log('Opening Apple Maps on iPhone')}>
                Open in Apple Maps
              </button>
              <button onClick={() => console.log('Sharing location on iPhone')}>
                Share Location
              </button>
            </div>
          )}
        </Map>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GPSMap;
