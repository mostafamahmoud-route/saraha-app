import { Router } from "express";
import * as messageService from "./message.service.js";

const router = Router();

router.post("/", messageService.createMessage);

export default router;
