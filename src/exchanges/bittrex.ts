import { Exchange } from './exchange';

export class BittrexExchange extends Exchange {
    public exchangeId = 'bittrex';

    public async fetchRates() {
        const USD_BTC = parseFloat(await this.fetchRate('USD', 'BTC'));
        const BTC_HIVE = parseFloat(await this.fetchRate('BTC', 'HIVE'));
        const BTC_HBD = parseFloat(await this.fetchRate('BTC', 'HBD'));

        if (isNaN(USD_BTC) || isNaN(BTC_HIVE) || isNaN(BTC_HBD)) {
            return false;
        }

        const USD_HIVE = USD_BTC * BTC_HIVE;
        const USD_HBD = USD_BTC * BTC_HBD; 

        this.rateUsdHive = USD_HIVE;
        this.rateUsdHbd = USD_HBD;

        return true;
    }

    private async fetchRate(from: string, to: string) {
        const endpoint = `https://api.bittrex.com/api/v1.1/public/getticker?market=${from}-${to}`;
        const request = await fetch(endpoint);
        const response = await request.json();

        if (response) {
            return response?.result?.Last;
        }

        return null;
    }
}