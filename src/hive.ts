import { randomRange } from "./functions";

export class Hive {
    private payee;
    private amount;
    private amountCurrency;
    private memo;
    private amounts;
    private fromAmount;
    private fromCurrency;
    private exchangeRate;

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