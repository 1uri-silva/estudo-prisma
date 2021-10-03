import { Deposit } from "@prisma/client";
import { DepositDTO } from "../dtos/depositDTO";
import { DepositRepository } from "../infra/repositories/DepositRepository";

export class CreateDepositService {
  constructor(
    private depositRepoPrisma: DepositRepository,
  ) {}

  public async execute(data: DepositDTO): Promise<Deposit> {
    const deposit = await this.depositRepoPrisma.create(data);

    return deposit;
  }
}