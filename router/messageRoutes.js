import express from "express";
import { deleteMessage, sendMessage } from "../controller/messageController.js";
import { getAllMesssages } from "../controller/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getAllMesssages);
router.delete("/delete/:id", isAuthenticated, deleteMessage)

export default router;
