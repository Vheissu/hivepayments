export default {
    WATCH_ACCOUNT: 'beggars',

    PAYMENT_API: 'http://localhost:5000',

    DATABASE: {
        URL: 'mongodb://localhost:27017',
        NAME: 'hivepayments',
        
    },

    KEYS: {
        AES: process.env.AES_KEY ?? '',
        HIVE: process.env.HIVE_PUBLIC_KEY ?? ''
    }
}