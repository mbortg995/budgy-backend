import budgetsModel from './budgets.model.js';

const budgetsRepository = {
  getBudgets: async () => {
    const budgets = await budgetsModel.find().lean();
    return budgets;
  },
  createBudget: async (budgetData) => {
    const budget = await budgetsModel.create(budgetData);
    return budget;
  },
  updateBudget: async (id, budgetData) => {
    const filter = { _id: id };
    const budget = await budgetsModel.findByIdAndUpdate(filter, budgetData, { new: true });
    return budget;
  },
  deleteBudget: async (id) => {Ç
    const filter = { _id: id };
    const budget = await budgetsModel.findByIdAndDelete(filter);
    return budget;
  }
};

export default budgetsRepository;