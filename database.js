import mongoose from 'mongoose';
import keys from './constants.configs.js';

const { MONGO_URI } = keys;

const MONGO_DB_NAME = 'budgy_backend';
const connectionConfig = { dbName: MONGO_DB_NAME };

export async function connectToDatabase(){
  try{
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI, connectionConfig);
    console.log('Connected to MongoDB');
  } catch (error){
    console.error('Error connecting to MongoDB: ', error);
  }
}
