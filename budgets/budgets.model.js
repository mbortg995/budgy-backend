import { model, Schema } from 'mongoose';


const budgetsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  initialBalance: {
    type: Number,
    required: true
  },
  expectedBudget: {
    type: Number,
    required: false
  }
});

const budgetsModel = model('Budget', budgetsSchema);

export default budgetsModel;
