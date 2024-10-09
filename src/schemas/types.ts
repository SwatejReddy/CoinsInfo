export interface ICrypto {
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
}