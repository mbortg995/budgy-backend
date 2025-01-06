import budgetsrepository from './budgets.repository.js';

const validateBudgetsFields = (budgetData) => {
  const requiredFields = ['name', 'year', 'user', 'initialBalance', 'expectedBudget'];

  for (const field of requiredFields) {
    if (!budgetData[field]) {
      throw new Error('Missing required field');
    }
  }
};

const budgetsService = {

  getBudgets: async () => {
    const budget = await budgetsrepository.getBudgets();
    return budget;
  },
  createBudget: async (budgetData) => {
    validateBudgetsFields(budgetData);
    const budget = await budgetsrepository.createBudget(budgetData);
    return budget;
  },
  updateBudget: async (id, budgetData) => {
    validateBudgetsFields(budgetData);
    const budget = await budgetsrepository.updateBudget(id);
    if (!budget) {
      throw new Error('Budget not found');
    }
    return budget;
  },
  deleteBudget: async (id) => {
    const budget = await budgetsrepository.deleteBudget(id);
    if (!budget) {
      throw new Error('Budget not found');
    }
    return budget;
  }
};

export default budgetsService;