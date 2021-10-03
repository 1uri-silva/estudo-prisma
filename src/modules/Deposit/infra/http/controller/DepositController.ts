import { Request, Response } from 'express';

import { CreateDepositService } from '../../../services/CreateDeposit';
import { ListDepositService } from '../../../services/ListDeposit';
import { DepositRepository } from '../../repositories/DepositRepository';

export class DepositController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, value } = request.body;

    const depositRepository = new DepositRepository()
    const depositService = new CreateDepositService(depositRepository);

    const deposit = await depositService.execute({
      name,
      value,
      date: new Date()
    });

    return response.json(deposit);
  }

  public async show(_: Request, response: Response): Promise<Response> {
    const depositRepository = new DepositRepository()
    const depositService = new ListDepositService(depositRepository);

    const deposit = await depositService.execute();

    return response.json(deposit);
  }
}
