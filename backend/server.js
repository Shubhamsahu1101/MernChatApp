import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const PORT = process.env.PORT || 5005;

import { app, server } from './socket/socket.js';

app.use(express.json());

app.use(cookieParser());



app.get('/', (req, res) => { res.send(`Server Running on Port ${PORT}`) });

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


server.listen(PORT, async () => {
    await connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`);
});