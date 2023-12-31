import { OperationCode } from '../types';
import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (value: number): OperationCode => {
        if (this.validateStatus()) {
            console.log('Loan value approved');
            return this.deposit(value);
        }
        return OperationCode.ERROR;
    };
}
