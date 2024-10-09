import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create Express application
const app: Application = express();

// Define the port
const port = process.env.PORT || 3000;

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server is running successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;