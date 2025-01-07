import { model, Schema } from 'mongoose';


const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cycle: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const transactionsModel = model('Transaction', transactionSchema);

export default transactionsModel;