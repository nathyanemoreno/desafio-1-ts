import { DioPlusAccount } from './class/DioPlusAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nathy', 10);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
const dioPlusAccount: DioPlusAccount = new DioPlusAccount('DIOPlus', 30);
peopleAccount.deposit(20);
companyAccount.getLoan(30);
dioPlusAccount.deposit(30);

console.log(peopleAccount);
console.log(companyAccount);
console.log(dioPlusAccount);
