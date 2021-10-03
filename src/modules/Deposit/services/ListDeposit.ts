import { Deposit } from "@prisma/client";
import { DepositRepository } from "../infra/repositories/DepositRepository";

export class ListDepositService {
  constructor(
    private depositRepoPrisma: DepositRepository,
  ) {}

  public async execute(): Promise<Deposit[] | undefined> {
    const deposit = await this.depositRepoPrisma.findAll();

    return deposit;
  }
}