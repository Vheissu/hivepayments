import { Auth } from './../src/auth';
import { Streamer} from 'hive-stream';
import config from '../src/config';

jest.genMockFromModule('steem-js-patched');

import steem from 'steem-js-patched';

steem.memo.encode = jest.fn((key, key2, message) => message);

describe('Auth', () => {
    test('should generate encrypted memo', async () => {
        const encrypted = await Auth.generateMemo('beggars');
        const memo = steem.memo.encode.mock.calls[0][2];

        expect(encrypted).toEqual(memo);
    });

    test('should decrypt encrypted memo', () => {
        const memo = steem.memo.encode.mock.calls[0][2].replace('#', '');

        const decrypted = Auth.decryptAes(memo);

        expect(decrypted[0]).toStrictEqual('beggars');
    });
});