import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';
import { API, LIMIT } from './constants';
import { cryptoRouter } from './routes/crypto.routes';

// Load environment variables
dotenv.config();

// Create Express application
const app: Application = express();

const jsonOptions = {
    limit: LIMIT
}

// Define the port
const port = parseInt(process.env.PORT as string, 10) || 3000;

app.use(express.json(jsonOptions));

// routes declaration
app.use(`${API}/crypto`, cryptoRouter)

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