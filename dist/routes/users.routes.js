"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const userController = new users_controller_1.UserController();
const router = (0, express_1.Router)();
router.get("/users", userController.getUsers.bind(userController));
router.post("/users", userController.createUser);
exports.default = router;
