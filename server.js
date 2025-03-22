import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import notesRoutes from './routes/notes.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDb();

// Use Routes
app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
