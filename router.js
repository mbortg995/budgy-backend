import { Router } from "express";
import budgetsRouter from "./budgets/budgets.router.js";
// import transactionsRouter from "./transactions/transactions.router.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

router.use("/budgets", budgetsRouter);
// router.use("/transactions", transactionsRouter);

export default router;