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
    const transactions = await transactionsModel.find(filters).lean();
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