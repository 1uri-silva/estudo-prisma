import { Router } from 'express';
import { DepositController } from '../controller/DepositController';

export const depositRouter = Router();

const depositController = new DepositController();

depositRouter.post('/', depositController.create);
depositRouter.get('/', depositController.show);