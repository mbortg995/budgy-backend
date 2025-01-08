import transactionsModel from './transactions.model.js';

const transactionsRepository = {
  getAllTransactions: async () => {
    const transactions = await transactionsModel.find().lean();
    return transactions;
  },
  getTransactionById: async (id) => {
    const filter = { _id: id };
    const transaction = await transactionsModel.findOne(filter).lean();
    return transaction;
  },
  filterTransactions: async (filters) => {
    const { startDate, endDate, ...otherFilters } = filters;
    let query = { ...otherFilters };

    if (startDate) {
      query.transactionDate = { $gte: new Date(startDate) };
    }
    if (endDate) {
      query.transactionDate = query.transactionDate || {};
      query.transactionDate.$lte = new Date(endDate);
    }
    const transactions = await transactionsModel.find(query).lean();
    return transactions;
  },
  createTransaction: async (transactionData) => {
    const transaction = await transactionsModel.create(transactionData);
    return transaction;
  },
  updateTransaction: async (id, transactionData) => {
    const filter = { _id: id };
    const transaction = await transactionsModel.findByIdAndUpdate(filter, transactionData, { new: true });
    return transaction;
  },
  deleteTransaction: async (id) => {
    const filter = { _id: id };
    const transaction = await transactionsModel.findByIdAndDelete(filter);
    return transaction;
  }
};

export default transactionsRepository;