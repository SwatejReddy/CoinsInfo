import { Document } from "mongoose";

export interface ICrypto extends Document {
    coinName: string;
    coinHistory: {
        timestamp: Date;
        price: number;
        marketCap: number;
        "24hChange": number;
    }[];
    latestData: {
        price: number;
        marketCap: number;
        "24hChange": number;
        lastUpdated: Date;
    }

    // instance methods
    fetchCryptoData: (coin: CoinType) => Promise<ICrypto>;
}

export type CoinType = "bitcoin" | "ethereum" | "matic-network";