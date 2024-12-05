"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_service_1 = require("../services/users.service");
class UserController {
    constructor() {
        this.getUsers = async (req, res) => {
            try {
                const users = await this.userService.getUsers();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to fetch users" });
            }
        };
        this.userService = new users_service_1.UserService();
    }
    async createUser(req, res) {
        const user = req.body;
        const createdUser = await this.userService.createUser(user);
        res.json(createdUser);
    }
}
exports.UserController = UserController;
