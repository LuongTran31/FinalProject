import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createMessage } from "../controllers/messageController.js";
const router = express();

router.post("/createMessage",verifyToken,createMessage)
router.delete("/deleteMessage",verifyToken);
export default router;