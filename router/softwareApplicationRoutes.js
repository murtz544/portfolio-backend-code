import express from "express";
import { addNewApplication, deleteApplication, getAllApplications } from "../controller/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewApplication);
router.get("/getall", getAllApplications);
router.delete("/delete/:id", isAuthenticated, deleteApplication);

export default router;
