import express from "express";
import "express-async-errors";

import ExpectionHandler from "./middlewares/expectionHandler";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(ExpectionHandler);

export { app };
