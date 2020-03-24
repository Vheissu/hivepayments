import { generateMemo } from './functions';

import config from './config';

export class Hive {
    private payee;
    private amount;
    private amountCurrency = 'HIVE';
    private memo;
    private amounts;
    private fromAmount;
    private fromCurrency;
    private exchangeRate;

    public setPayee(payee: string) {
        this.payee = payee;
    }

    public setAmount(amount) {
        this.amount = amount;
    }

    public setAmountCurrency(currency) {
        this.amountCurrency = currency;
    }

    public setMemo(memo: string) {
        this.memo = memo ?? generateMemo();
    }

    public setAmounts(amounts) {
        this.amounts = amounts;
    }

    public setFromAmount(fromAmount) {
        this.fromAmount = fromAmount;
    }

    public setFromCurrency(fromCurrency) {
        this.fromCurrency = fromCurrency;
    }

    public setExchangeRate(exchangeRate) {
        this.exchangeRate = exchangeRate;
    }

    public getPayee() {
        return this.payee;
    }

    public getAmount() {
        return this.amount;
    }

    public getAmountCurrency() {
        return this.amountCurrency;
    }

    public getMemo() {
        return this.memo;
    }

    public getAmounts() {
        return this.amounts;
    }

    public getFromAmount() {
        return this.fromAmount;
    }

    public getFromCurrency() {
        return this.fromCurrency;
    }

    public getExchangeRate() {
        return this.exchangeRate;
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