export type HivePaymentSymbols = 'HIVE' | 'HBD';
export type PaymentStatus = 'new' | 'cancelled' | 'complete';

export interface PaymentInterface {
    from: string;
    amount: string;
    currency: HivePaymentSymbols;
    memo: string;
    status?: PaymentStatus;
    date?: number;
}

export class PaymentModel {
    private from: string = '';
    private amount: string = '';
    private currency: HivePaymentSymbols = 'HIVE';
    private memo: string = '';
    private status: PaymentStatus = 'new';
    private date: number;

    constructor(data: PaymentInterface) {
        Object.assign(this, data);

        this.amount = parseFloat(this.amount).toFixed(3);
         
        this.date = Date.now();
    }

    valid() {
        if (this.currency !== null && !isNaN(parseFloat(this.amount))) {
            return true;
        }

        return false;
    }

}