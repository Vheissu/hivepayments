import { HiveRates } from './hive-rates';

export async function convertHiveAmount(amount, fiatSymbol, hiveSymbol) {
    if (fiatSymbol === hiveSymbol) {
        return amount;
    }

    const rates = new HiveRates();

    await rates.fetchRates();

    const rate = rates.fiatToHiveRate(fiatSymbol, hiveSymbol);
    const total = amount / rate;
    
    return rate > 0 ? roundPrecision(total, 3) : 0;
}

export function roundPrecision(value, precision) {
    const NUMBER_SIGN = value >= 0 ? 1 : -1;

    return parseFloat((Math.round((value * Math.pow(10, precision)) + (NUMBER_SIGN * 0.0001)) / Math.pow(10, precision)).toFixed(precision));
}

export function randomRange(min = 0, max = 2000) {
    return (!isNaN(min) && !isNaN(max) ? Math.floor(Math.random() * (max - min + 1)) + min : NaN); 
}

export function generateMemo(length = 12) {
    let memo = '';

    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const max = characters.length - 1;

    for (let i = 0; i < length; i++) {
        memo += characters[randomRange(0, max)];
    }

    return memo;
}