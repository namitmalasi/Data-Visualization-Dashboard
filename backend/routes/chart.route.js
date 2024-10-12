import express from "express";
import { protectRoute } from "../midleware/auth.middleware.js";
import {
  getBarChartData,
  getLineChartData,
} from "../controllers/chart.controller.js";

const router = express.Router();

router.get("/bar-chart", protectRoute, getBarChartData);
router.get("/line-chart", protectRoute, getLineChartData);

export default router;
