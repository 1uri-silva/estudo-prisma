import { prisma } from "@modules/Deposit";
import { Deposit } from "@prisma/client";
import { DepositDTO } from "../../dtos/depositDTO";
import { IDeposit } from "../../repositories/DepositRepository";

export class DepositRepository implements IDeposit {
  
  public async create(data:DepositDTO): Promise<Deposit> {
    const deposit = await prisma.deposit.create({
      data
    });
    return deposit
  }

  public async findAll(): Promise<Deposit[] | undefined> {
    const depositAll = await prisma.deposit.findMany();

    return depositAll;
  }
}