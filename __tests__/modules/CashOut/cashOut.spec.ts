import { CreateCashOutService } from "@modules/CashOut/services/CreateCashOutService"

import { FakeCashOut } from "./repositories/fakes/cashOutFaker"

describe("Create CashOut", () => {
  it("should be able to create CashOut", async () => {
    const faker = new FakeCashOut();
    const createCashOut = new CreateCashOutService(faker);

    const CashOut = await createCashOut.execute({
      name: 'iuri',
      value: '1233'
    });

    expect(CashOut).toHaveProperty('id');
  });

  // it("should be able to list CashOut", async () => {
  //   const faker = new FakeCashOut();
  //   const createCashOut = new CreateCashOutService(faker);
  //   const list = new ListCashOutService(faker);

  //   const CashOut1 = await createCashOut.execute({
  //     name: 'iuri',
  //     value: '1233'
  //   });
    
  //   const CashOut2 = await createCashOut.execute({
  //     name: 'iuri',
  //     value: '1233'
  //   });

  //   const listCashOut = await list.execute()

  //   expect(listCashOut).toEqual([CashOut1, CashOut2]);
  // });
});