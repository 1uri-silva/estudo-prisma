import { CashOut } from "@prisma/client";
import { CashOutDTO } from "../dtos/cashOutDTO";

export interface CashOutRepository {
  create(cashOut: CashOutDTO): Promise<CashOut>;
}