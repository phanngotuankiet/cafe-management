import express, { Application } from "express";
import cors from "cors";
import { DataSource } from "typeorm";
import { dbConfig } from "./config/database";
import userRoutes from "./routes/users.routes";

async function startServer() {
  const app: Application = express();

  // Database connection
  try {
    const AppDataSource = new DataSource(dbConfig);
    await AppDataSource.initialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }

  app.use(cors());
  app.use(express.json());

  app.use("/api", userRoutes);


  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((error) => {
  console.error("Server startup failed:", error);
});
