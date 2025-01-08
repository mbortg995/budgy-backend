
import  transactionsService  from './transactions.service.js';

export const transactionsController = {
  getAllTransactions: async (req, res) => {
    try {
      const transactions = await transactionsService.getAllTransactions();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  filterTransactions: async (filters, res) => {
    try {
      if (filters._id && filters._id.length !== 24) {
        return res.status(400).json({ message: 'Invalid _id length. It should be 24 characters.' });
      }
      const filteredTransactions = await transactionsService.filterTransactions(filters);
      res.status(200).json(filteredTransactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createTransaction: async (req, res) => {
    try {
      const transaction = await transactionsService.createTransaction(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateTransaction: async (req, res) => {
    try {
      const updatedTransaction = await transactionsService.updateTransaction(req.params.id, req.body);
      if (updatedTransaction) {
        res.status(200).json(updatedTransaction);
      } else {
        res.status(404).json({ message: 'Transaction not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      const deletedTransaction = await transactionsService.deleteTransaction(req.params.id);
      if (deletedTransaction) {
        res.status(200).json({ message: 'Transaction deleted' });
      } else {
        res.status(404).json({ message: 'Transaction not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


