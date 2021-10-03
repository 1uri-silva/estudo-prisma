import { CashOut } from "@prisma/client";
import { CashOutDTO } from "../dtos/cashOutDTO";
import { CashOutRepository } from "../infra/repositories/CashOutRepository";

export class CreateCashOutService {
  constructor(
    private cashRepoPrisma: CashOutRepository
  ) {}

  public async execute(data: CashOutDTO): Promise<CashOut> {
    const cash = await this.cashRepoPrisma.create(data);

    return cash;
  }
}