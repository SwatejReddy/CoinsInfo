import { Router } from "express";

export const cryptoRouter = Router();

cryptoRouter.route("/stats").get();
cryptoRouter.route("/deviation").get();