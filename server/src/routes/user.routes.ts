import express from "express";
import controller from "../controllers/user/index";

const router = express.Router();

//auth
router.post("/register", controller.auth.register);
router.post("/login", controller.auth.login);

export default router;
