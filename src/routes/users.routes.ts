import { Router } from "express";
import { UserController } from "../controllers/users.controller";

const userController = new UserController();

const router = Router();

router.get("/users", userController.getUsers.bind(userController));
router.post("/users", userController.createUser);

export default router;
