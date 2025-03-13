import React, { useState } from 'react';
import { FiSettings, FiPlusCircle } from 'react-icons/fi'; // Make sure to install react-icons
import { MapContainer, TileLayer, Marker } from 'react-leaflet'; // Make sure to install react-leaflet

const MainLayout = () => {
  const [activityType, setActivityType] = useState('Walking');
  const [routeType, setRouteType] = useState('Park Route');
  
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Header */}
      <header className="relative h-16 flex items-center justify-center bg-white shadow-sm px-4">
        <div className="absolute left-4">
          <FiSettings className="w-6 h-6 text-gray-600" />
        </div>
        <h1 className="text-2xl font-bold text-blue-600">DogMotion</h1>
        <div className="absolute right-4">
          <FiPlusCircle className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* Map Section */}
      <div className="flex-1 relative">
        <MapContainer
          center={[42.3601, -71.0589]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[42.3601, -71.0589]} />
        </MapContainer>
      </div>

      {/* Bottom Control Panel */}
      <div className="bg-white p-4 rounded-t-3xl shadow-lg">
        <div className="space-y-4">
          {/* Activity Selection */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Activity</span>
            <select 
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="border rounded-lg px-3 py-1"
            >
              <option>Walking</option>
              <option>Running</option>
              <option>Training</option>
            </select>
          </div>

          {/* Route Type */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Route Type</span>
            <select
              value={routeType}
              onChange={(e) => setRouteType(e.target.value)}
              className="border rounded-lg px-3 py-1"
            >
              <option>Park Route</option>
              <option>Neighborhood Walk</option>
              <option>Training Circuit</option>
            </select>
          </div>

          {/* Audio Settings */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Audio Updates</span>
            <select className="border rounded-lg px-3 py-1">
              <option>5 min</option>
              <option>10 min</option>
              <option>15 min</option>
            </select>
          </div>

          {/* Start Button */}
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-lg">
            Start Activity
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="h-16 bg-white border-t">
        <ul className="h-full flex justify-around items-center">
          <li className="text-gray-600">Profile</li>
          <li className="text-gray-600">Training</li>
          <li className="text-blue-500 font-semibold">Start</li>
          <li className="text-gray-600">Pack</li>
          <li className="text-gray-600">Discover</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainLayout;
