import { OperationCode } from '../types';
import { DioAccount } from './DioAccount';

export class DioPlusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): OperationCode => {
        if (this.validateStatus()) {
            this.balance += value + 10;
            return OperationCode.SUCCESS;
        }
        return OperationCode.ERROR;
    };
}
