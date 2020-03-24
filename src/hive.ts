import { randomRange } from './functions';

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
        this.memo = memo ?? this.generateMemo();
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

    public generateMemo(length = 12) {
        let memo = '';

        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const max = characters.length - 1;

        for (let i = 0; i < length; i++) {
            memo += characters[randomRange(0, max)];
        }

        return memo;
    }
}