import { Request as ExpressRequest, Response } from 'express';
import ApiResponse from '../utils/ApiResponse';
import { CoinType } from '../schemas/types';
import { z } from 'zod';
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