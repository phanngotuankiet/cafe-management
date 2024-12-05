"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const database_1 = require("./config/database");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
async function startServer() {
    const app = (0, express_1.default)();
    // Database connection
    try {
        const AppDataSource = new typeorm_1.DataSource(database_1.dbConfig);
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/api", users_routes_1.default);
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
}
startServer().catch((error) => {
    console.error("Server startup failed:", error);
});
