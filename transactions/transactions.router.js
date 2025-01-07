import  { express } from 'express';
import { transactionsController } from './transactions.controller.js';

const router = express.Router();

router.get('/', transactionsController.getAllTransactions);
router.get('/:id', transactionsController.getTransactionById);
router.get('/filter', transactionsController.filterTransactions);
router.post('/', transactionsController.createTransaction);
router.put('/:id', transactionsController.updateTransaction);
router.delete('/:id', transactionsController.deleteTransaction);

export default router;