import { Streamer } from 'hive-stream';
import Crypto from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { Client } from 'dsteem';
import steem from 'steem-js-patched';

import config from './config';

const streamer = new Streamer();
const client = streamer['client'] as Client;

export class Auth {
    static async generateMemo(username: string) {
        const encryptedMessage = Crypto.AES.encrypt(`${username}::${uuidv4()}`, config.KEYS.AES).toString();

        try {
            const res = await client.database.getAccounts([username]);

            const encryptedMemo = steem.memo.encode(config.KEYS.HIVE, res[0].posting.key_auths[0][0], `#${encryptedMessage}`);

            return encryptedMemo;
        } catch (e) {
            throw new Error(e);
        }
    }

    static decryptAes(string: string) {
        return Crypto.AES.decrypt(string, config.KEYS.AES).toString(Crypto.enc.Utf8).split('::');
    }
}