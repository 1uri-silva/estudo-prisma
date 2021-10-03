import { Request, Response } from 'express';

import { CreateCashOutService } from '@modules/CashOut/services/CreateCashOutService';
import { CashOutRepository } from '../../repositories/CashOutRepository';

export class CashOutController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, value } = request.body;

    const cashRepository = new CashOutRepository()
    const cashService = new CreateCashOutService(cashRepository);

    const cash = await cashService.execute({
      name,
      value,
    });

    return response.json(cash);
  }
}
