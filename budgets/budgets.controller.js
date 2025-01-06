import budgetsService from './budgets.service.js';

export const budgetsController = {
  getBudgets: async (req, res) => {
    try {
      const budgets = await budgetsService.getBudgets();
      res.status(200).json(budgets);
    } catch (error) {
      res.status(500).json({ error: "Internal server error fetching data." });
    }
  },
  createBudget: async (req, res) => {
    try {
      const budget = await budgetsService.createBudget(req.body);
      res.status(201).json(budget);
    } catch (error) {
      res.status(500).json({ error: "Internal server error. Could not create budget." });
    }
  },
  updateBudget : async (req, res) => {
    try {
      const budget = await budgetsService.updateBudget(req.params.id, req.body);
      res.status(200).json(budget);
    } catch (error) {
      res.status(500).json({ error: "Internal server error. Could not update the budget." });
    }
  },

  deleteBudget : async (req, res) => {
    try {
      await budgetsService.deleteBudget(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal server error. Could not delete the budget." });
    }
  }
};