import { Router } from 'express';
import { CashOutController } from '../controller/CashOutController';

export const cashOutRouter = Router();

const cashOutController = new CashOutController();

cashOutRouter.post('/', cashOutController.create);