import { Request as ExpressRequest, Response } from 'express';
import ApiResponse from '../utils/ApiResponse';
import { coinName } from '../schemas/zod';
import Crypto from '../models/crypto.model'; // Import the Crypto model

async function fetchCryptoData(coin: any) {
    const data = Crypto.findOne({ coinName: coin });
    return data;
}

export const getStats = async (req: ExpressRequest, res: Response) => {
    try {
        // if coin name is different from the expected values, return an error saying invalid coin
        const coin = coinName.parse(req.query.coin as string);
        // fetch the data from the database
        const data = await fetchCryptoData(coin);

        const stats = {
            price: data?.latestData.price,
            marketCap: data?.latestData.marketCap,
            "24hChange": data?.latestData["24hChange"]
        };

        return res.json(new ApiResponse(200, { stats }, "Success"));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, null, "Invalid coin"));
    }
}


async function fetchCryptoDeviation(coin: any) {
    const data = await fetchCryptoData(coin);

    // Get the last 100 records sorted by timestamp
    const last100Records = data?.coinHistory.slice(-100);

    // Return 0 if there are no records
    if (!last100Records || last100Records.length === 0) {
        return 0;
    }

    // Calculate the mean of the prices
    const mean = last100Records.reduce((acc, curr) => acc + curr.price, 0) / last100Records.length;

    // Calculate the variance
    const variance = last100Records.reduce((acc, curr) => acc + Math.pow(curr.price - mean, 2), 0) / last100Records.length;

    // Calculate the standard deviation
    const deviation = Math.sqrt(variance);
    const roundedDeviation = Math.round(deviation * 100) / 100;

    return roundedDeviation;
}

export const getDeviation = async (req: ExpressRequest, res: Response) => {
    try {
        const coin = coinName.parse(req.query.coin as string);

        const deviation = await fetchCryptoDeviation(coin);

        if (!deviation) {
            return res.status(500).json(new ApiResponse(500, null, "No data available"));
        }

        return res.json(new ApiResponse(200, { deviation }, "Success"));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, null, "Invalid coin"));
    }
}