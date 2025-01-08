import { Router } from 'express';
import { transactionsController } from './transactions.controller.js';

const router = Router();

router.get('/', async (req, res) => {
  const { _id, budget_id, start_date, end_date, type } = req.query;
  try {
    if (_id || budget_id || start_date || end_date || type) {
      await transactionsController.filterTransactions(req.query, res);
    } else {
      await transactionsController.getAllTransactions(req, res);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', transactionsController.createTransaction);
router.put('/:id', transactionsController.updateTransaction);
router.delete('/:id', transactionsController.deleteTransaction);

export default router;