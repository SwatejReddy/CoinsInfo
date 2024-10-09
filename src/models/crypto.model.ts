import { Schema } from "mongoose";
import mongoose from "mongoose";
import { ICrypto } from "../schemas/types";

const CryptoSchema: Schema<ICrypto> = new Schema({
    coinName: {
        type: String,
        required: true,
        enum: ['bitcoin', 'ethereum', 'matic-network'],
        index: true
    },
    coinHistory: [{
        timestamp: {
            type: Date,
            required: true,
            index: true
        },
        price: {
            type: Number,
            required: true
        },
        marketCap: {
            type: Number,
            required: true
        },
        "24hChange": {
            type: Number,
            requried: true
        }
    }],
    latestData: {
        price: Number,
        marketCap: Number,
        "24hChange": Number,
        lastUpdated: Date
    }
})

const Crypto = (mongoose.models.Crypto as mongoose.Model<ICrypto>) || mongoose.model<ICrypto>('Crypto', CryptoSchema);

export default Crypto;