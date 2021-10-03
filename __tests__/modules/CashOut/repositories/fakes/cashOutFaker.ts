import { CashOut } from '@prisma/client';
import {v4 as uuid} from 'uuid'

import { CashOutDTO } from '@modules/CashOut/dtos/cashOutDTO';
import { ICashOut } from '../ICashOut';


export class FakeCashOut implements ICashOut {
 private cashOutFaker: CashOut[] = []

 public async create(data: CashOutDTO): Promise<CashOut> {
   let CashOutFake: CashOut = {
     date: new Date(),
     id: '',
     name: '',
     value: ''
   };

   Object.assign(CashOutFake, { id: uuid() }, data);

   this.cashOutFaker.push(CashOutFake);

   return CashOutFake;

 }

//  public async findAll(): Promise<CashOut[] | undefined> {
//   const find = this.cashOutFaker.map(data => {
//     return data;
//   });
//   return find;
//  }
}