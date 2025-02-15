import { Router } from 'express';
import { transactionsController } from './transactions.controller.js';

const router = Router();

router.get('/', async (req, res) => {
  const { _id, budget_id, start_date, end_date, type } = req.query;

  if (_id || budget_id || start_date || end_date || type) {
    await transactionsController.filterTransactions(req.query, res);
  } else {
    await transactionsController.getAllTransactions(req, res);
  }
});
router.post('/', transactionsController.createTransaction);
router.put('/:id', transactionsController.updateTransaction);
router.delete('/:id', transactionsController.deleteTransaction);

export default router;