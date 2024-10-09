import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';

// Load environment variables
dotenv.config();

// Create Express application
const app: Application = express();

// Define the port
const port = parseInt(process.env.PORT as string, 10) || 3000;

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server is running successfully!' });
});

// Start the server
app.listen(port, "0.0.0.0", () => {
    connectDB().then(() => {
        console.log(`Server is running on port ${port}`);
    })
});

export default app;