import transactionsrepository from './transactions.repository.js';


const validateTransactionsFields = (transactionData) => {
  const requiredFields = ['description', 'amount', 'type', 'cycle','title', 'budget_id', 'transactionDate'];

  for (const field of requiredFields) {
    if (!transactionData[field]) {
      throw new Error('Missing required field');
    }
  }
}

const transactionsService = {

  getAllTransactions: async () => {
    const transactions = await transactionsrepository.getAllTransactions();
    return transactions;
  },
  getTransactionById: async (id) => {
    const transaction = await transactionsrepository.getTransactionById(id);
    return transaction;
  },
  filterTransactions: async (filters) => {
    const filteredTransactions = await transactionsrepository.filterTransactions(filters);
    return filteredTransactions;
  },
  createTransaction: async (transactionData) => {
    validateTransactionsFields(transactionData);
    if (!transactionData.budget_id) {
      throw new Error('Missing required field: budget_id');
    }
    const transaction = await transactionsrepository.createTransaction(transactionData);
    return transaction;
  },
  updateTransaction: async (id, transactionData) => {
    validateTransactionsFields(transactionData);
    const transaction = await transactionsrepository.updateTransaction(id, transactionData);
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    return transaction;
  },
  deleteTransaction: async (id) => {
    const transaction = await transactionsrepository.deleteTransaction(id);
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    return transaction;
  }
};

export default transactionsService;