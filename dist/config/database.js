"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const path_1 = __importDefault(require("path"));
exports.dbConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgrespassword",
    database: process.env.DB_NAME || "postgres",
    entities: [path_1.default.join(__dirname, "../models/**/*.{ts,js}")],
    synchronize: process.env.NODE_ENV === "development",
    logging: process.env.NODE_ENV === "development",
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
};
