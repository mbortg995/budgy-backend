
import { transactionsService } from './transactions.service';

const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await transactionsService.getAllTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single transaction by ID
router.get('/:id', async (req, res) => {
  try {
    const transaction = await transactionsService.getTransactionById(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Filter transactions
router.get('/filter', async (req, res) => {
  try {
    const { startDate, endDate, type, month } = req.query;
    const filteredTransactions = await transactionsService.filterTransactions({ startDate, endDate, type, month });
    res.status(200).json(filteredTransactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new transaction
router.post('/', async (req, res) => {
  try {
    const transaction = await transactionsService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a transaction by ID
router.put('/:id', async (req, res) => {
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
});

// Delete a transaction by ID
router.delete('/:id', async (req, res) => {
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
});
