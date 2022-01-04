import { ErrorRequestHandler } from "express";

const ExpectionHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({ error: err.message });
};

export default ExpectionHandler;
