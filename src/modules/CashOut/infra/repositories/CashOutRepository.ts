import { prisma } from "@modules/CashOut";
import { PrismaClient, CashOut } from "@prisma/client";
import { CashOutDTO } from "../../dtos/cashOutDTO";
import { CashOutRepository as CashOutRepo } from "../../repositories/CashOutRepository";

export class CashOutRepository implements CashOutRepo {

  public async create(data: CashOutDTO): Promise<CashOut> {

    const cashOut = await prisma.cashOut.create({
      data
    });
    return cashOut
  }
}