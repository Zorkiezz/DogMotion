import { Router } from 'express';

const router = Router();

// In-memory storage for GPS data
let gpsData = [];

// GET Endpoint
router.get('/', (req, res) => {
  res.json(gpsData);
});

// POST Endpoint
router.post('/', (req, res) => {
  const gps = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };

  // Add the new GPS data to the in-memory array
  gpsData.push(gps);
  res.status(201).json(gps);
});

export default router;