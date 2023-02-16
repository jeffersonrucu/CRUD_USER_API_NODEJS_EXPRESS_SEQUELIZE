import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes/index';

const app = express();
const PORT = process.env.PORT || 80;

dotenv.config();

app.use(express.json());
app.use(router);
app.listen(PORT, () =>  console.log('Started!'));
