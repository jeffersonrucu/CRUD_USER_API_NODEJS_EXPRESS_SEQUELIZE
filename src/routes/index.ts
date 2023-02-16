import { router as userRouter } from '@routes/user';
import express from 'express';

const router = express.Router();

router.use( userRouter );

export { router }
