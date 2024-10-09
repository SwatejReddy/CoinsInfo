import { Router } from "express";
import { getDeviation, getStats } from "../controllers/crypto.controller";

export const cryptoRouter = Router();

cryptoRouter.route("/stats").get(getStats);
cryptoRouter.route("/deviation").get(getDeviation);