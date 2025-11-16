import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Bug from './models/Bug.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bug-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes

// GET all bugs
app.get('/api/bugs', async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (err) { next(err); }
});

// POST create new bug
app.post('/api/bugs', async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newBug = new Bug({ title });
    const savedBug = await newBug.save();
    res.status(201).json(savedBug);
  } catch (err) { next(err); }
});

// PUT update bug status
app.put('/api/bugs/:id', async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['open', 'in-progress', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedBug = await Bug.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedBug) return res.status(404).json({ error: 'Bug not found' });
    res.json(updatedBug);
  } catch (err) { next(err); }
});

// DELETE a bug
app.delete('/api/bugs/:id', async (req, res, next) => {
  try {
    const deletedBug = await Bug.findByIdAndDelete(req.params.id);
    if (!deletedBug) return res.status(404).json({ error: 'Bug not found' });
    res.json({ message: 'Bug deleted successfully' });
  } catch (err) { next(err); }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
