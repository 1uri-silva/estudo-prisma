import { Deposit } from '@prisma/client';
import {v4 as uuid} from 'uuid'

import { DepositDTO } from '@modules/Deposit/dtos/depositDTO';
import { IDeposit } from '../IDeposit';


export class FakeDeposit implements IDeposit {
 private depositFaker: Deposit[] = []

 public async create(data: DepositDTO): Promise<Deposit> {
   let depositFake: Deposit = {
     date: new Date(),
     id: '',
     name: '',
     value: ''
   };

   Object.assign(depositFake, { id: uuid() }, data);

   this.depositFaker.push(depositFake);

   return depositFake;

 }

 public async findAll(): Promise<Deposit[] | undefined> {
  const find = this.depositFaker.map(data => {
    return data;
  });
  return find;
 }
}