"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const typeDefs_1 = require("./graphql/typeDefs");
const resolvers_1 = require("./graphql/resolvers");
const typeorm_1 = require("typeorm");
const database_1 = require("./config/database");
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
    // Apollo Server setup
    const apolloServer = new server_1.ApolloServer({
        typeDefs: typeDefs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    await apolloServer.start();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/graphql', (0, express4_1.expressMiddleware)(apolloServer, {
        context: async ({ req }) => ({ req })
    }));
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
}
startServer().catch((error) => {
    console.error("Server startup failed:", error);
});
