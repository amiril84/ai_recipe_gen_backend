import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { recipeRouter } from './routes/recipe';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/recipe', recipeRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
