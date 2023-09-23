import { OperationCode } from '../types';

export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): OperationCode => {
        this.name = name;
        console.log('Name changed successfully');
        return OperationCode.SUCCESS;
    };

    getName = (): string => {
        return this.name;
    };

    deposit = (value: number): OperationCode => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log('Deposit successful');
            return OperationCode.SUCCESS;
        }
        return OperationCode.ERROR;
    };

    withdraw = (value: number): OperationCode => {
        if (this.validateStatus() && value >= this.balance) {
            this.balance -= value;
            console.log('Withdraw successful');
            return OperationCode.SUCCESS;
        }
        return OperationCode.ERROR;
    };

    getBalance = (): OperationCode => {
        console.log(this.balance);
        return OperationCode.SUCCESS;
    };

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error('Invalid account');
    };
}
