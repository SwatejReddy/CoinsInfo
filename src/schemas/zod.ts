import { z } from 'zod';

export const coinName = z.string().refine((val) => ["bitcoin", "ethereum", "matic-network"].includes(val), { message: "Invalid coin" });