import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./config/swagger.json";
import ExpectionHandler from "./middlewares/expectionHandler";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

app.use(ExpectionHandler);

export { app };
