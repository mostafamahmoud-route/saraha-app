import { Router } from "express";
import * as userService from "./user.service.js";
import * as userSchema from "./user.schema.js";
import { validate } from "../../middlewares/validation.middleware.js";

const router = Router();

router.post("/register", validate(userSchema.register), userService.register);

router.post("/login", validate(userSchema.login), userService.login);

export default router;
