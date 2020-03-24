import dotenv from 'dotenv';
dotenv.config();

import { Streamer } from 'hive-stream';

import express from 'express';

import config from './config';

const streamer = new Streamer();

const app = express();
const port = 5001;

streamer.start();

streamer.onTransfer(config.WATCH_ACCOUNT, () => {
    
});

app.get('/', (req, res) => {
    res.send('Invalid');
});

app.get('/pay/:from/:to', (req, res) => {

});

app.get('/getTransfer/:id', async (req, res) => {
    const client = streamer['client'];
    const history = await client.call('database_api', 'get_account_history', [req.params.id, -1, 20]);
    const transfers = history.filter(tx => tx[1].op[0] === 'transfer');

    const actualTransfers = transfers.reduce((arr, tx) => {
        arr.push(tx[1].op[1]);

        return arr;
    }, []);

    console.log(actualTransfers);

    res.send('Yeah');
});

const server = app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});