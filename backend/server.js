import express from 'express';  
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import shopRoutes from './routes/shop.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173", // ✅ Set this to your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     }
// );
app.use('/api/auth',authRoutes);
app.use('/api/shop', shopRoutes);

app.listen(PORT, () => {
     connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
