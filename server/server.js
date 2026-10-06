import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { processAppointmentRequest } from './mailer.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Appointment submission endpoint
app.post('/api/book', async (req, res) => {
  try {
    const result = await processAppointmentRequest(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your appointment request.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', salon: 'The Wax Studio', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`The Wax Studio Booking API server running on port ${PORT}`);
});
