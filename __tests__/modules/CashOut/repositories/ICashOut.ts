import { CashOut } from "@prisma/client";
import { CashOutDTO } from "@modules/CashOut/dtos/cashOutDTO";

export interface ICashOut {
  create(deposit: CashOutDTO): Promise<CashOut>;
  // findAll(): Promise<CashOut[] | undefined>;
}