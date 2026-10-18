import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Lead from './models/Lead.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error.message));

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'ME Technologies API scaffold is running' });
});

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !interest?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: 'Name, email, interest, and message are required.',
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: 'Database is not connected. Please try again later.',
      });
    }

    const lead = await Lead.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      interest: interest.trim(),
      message: message.trim(),
    });

    return res.status(201).json({
      message: 'Your enquiry was submitted successfully.',
      leadId: lead._id,
    });
  } catch (error) {
    console.error('Lead submission error:', error.message);
    return res.status(500).json({
      error: 'Unable to submit your enquiry right now.',
    });
  }
});

app.listen(PORT, () => console.log(`API scaffold listening on http://localhost:${PORT}`));
