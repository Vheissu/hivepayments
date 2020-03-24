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

const server = app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});