// server.js
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Contact form API route
app.post('/api/contact', async (req, res) => {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const { name, email, phone, course, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const db = client.db('kalakar');
    const contacts = db.collection('contacts');

    const result = await contacts.insertOne({
      name,
      email,
      phone,
      course,
      message,
      createdAt: new Date(),
    });

    await client.close();

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: result.insertedId,
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An error occurred while submitting the form',
    });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});