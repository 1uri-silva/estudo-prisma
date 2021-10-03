import { CreateDepositService } from "@modules/Deposit/services/CreateDeposit"
import { ListDepositService } from "@modules/Deposit/services/ListDeposit"

import { FakeDeposit } from "./repositories/fakes/fakeDeposit"

describe("Create Deposit", () => {
  it("should be able to create deposit", async () => {
    const faker = new FakeDeposit();
    const createDeposit = new CreateDepositService(faker);

    const deposit = await createDeposit.execute({
      name: 'iuri',
      value: '1233'
    });

    expect(deposit).toHaveProperty('id');
  });

  it("should be able to list deposit", async () => {
    const faker = new FakeDeposit();
    const createDeposit = new CreateDepositService(faker);
    const list = new ListDepositService(faker);

    const deposit1 = await createDeposit.execute({
      name: 'iuri',
      value: '1233'
    });
    
    const deposit2 = await createDeposit.execute({
      name: 'iuri',
      value: '1233'
    });

    const listDeposit = await list.execute()

    expect(listDeposit).toEqual([deposit1, deposit2]);
  });
});