import { find, remove } from './database';

const ONE_HOUR = 1000 * 60 * 60;

async function cleanupOldPayments() {
    const HOUR_AGO = Date.now() - ONE_HOUR;

    const payments = await find('payments', { status: 'new' });

    if (payments?.length) {
        for (const payment of payments) {
        if (payment.date < HOUR_AGO) {
            await remove('payments', { _id: payment._id });
        }
        }
    }
}

cleanupOldPayments();
