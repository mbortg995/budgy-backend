import { Router } from "express";
import { budgetsController } from "./budgets.controller.js";

const router = Router();

router.get("/budgets", budgetsController.getBudgets);
router.post("/budgets", budgetsController.createBudget);
router.put("/budgets/:id", budgetsController.updateBudget);
router.delete("/budgets/:id", budgetsController.deleteBudget);

export default router;