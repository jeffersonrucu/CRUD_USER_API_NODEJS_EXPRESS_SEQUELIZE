import express from 'express'
import { UserController } from '@controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/user/save', userController.save);

export { router }
