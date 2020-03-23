import dotenv from 'dotenv';
dotenv.config();

import { Streamer } from 'hive-stream';

import config from './config';

const streamer = new Streamer();

streamer.start();

streamer.onTransfer(config.WATCH_ACCOUNT, () => {
    
});