import { PaymentModel } from './models/payment';
import { generateMemo } from './functions';

import config from './config';
import { insertOne } from './database';

export class Hive {
    public async createPayment(from: string, amount, currency, memo?) {
        const payment = new PaymentModel({
            from,
            amount,
            currency,
            memo: memo ?? generateMemo(12)
        });

        if (payment.valid()) {
            const insert = await insertOne('payments', payment);

            if (insert.insertedCount) {
                return insert.insertedId;
            }
        }
    }

    public async getTransfer(account: string, memo?: string) {
        let url = `${config.PAYMENT_API}/getTransfer/${account}`;

        if (memo) {
            url += `/${memo}`;
        }

        const request = await fetch(`${url}`);
        const response = await request.json();

        if (!response) {
            return null;
        }

        for (const tx of response) {
            const amountArr = tx.amount.split(' ');

            const amount = amountArr[0].toLocaleString('en');
            const symbol = amountArr[1];
        }
    }
}