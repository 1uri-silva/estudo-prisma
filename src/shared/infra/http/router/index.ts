import { Router } from 'express';
import { depositRouter  } from '@modules/Deposit/infra/http/routes/deposit.routes';
import { cashOutRouter } from '@modules/CashOut/infra/http/routes/cashOut.routes';

const routes = Router();

routes.use('/deposit', depositRouter);
routes.use('/cashOut', cashOutRouter);

export default routes;