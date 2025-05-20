import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}