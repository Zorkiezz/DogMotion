import React from 'react';
import GPSMap from '../components/GPSmap';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Welcome to the GPS Tracking App</h1>
      <GPSMap />
    </MainLayout>
  );
};

export default HomePage;
