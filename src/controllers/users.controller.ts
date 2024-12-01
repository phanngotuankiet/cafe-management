import { UserService } from "../services/users.service";
import { Request, Response } from "express";
export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  };

  async createUser(req: Request, res: Response) {
    const user = req.body;
    const createdUser = await this.userService.createUser(user);
    res.json(createdUser);
  }
}
