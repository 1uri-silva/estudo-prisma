import { Deposit } from "@prisma/client";
import { DepositDTO } from "@modules/Deposit/dtos/depositDTO";

export interface IDeposit {
  create(deposit: DepositDTO): Promise<Deposit>;
  findAll(): Promise<Deposit[] | undefined>;
}