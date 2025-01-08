import { Router } from "express";
import { budgetsController } from "./budgets.controller.js";

const router = Router();

router.get("/", budgetsController.getBudgets);
router.post("/", budgetsController.createBudget);
router.put("/:id", budgetsController.updateBudget);
router.delete("/:id", budgetsController.deleteBudget);

export default router;