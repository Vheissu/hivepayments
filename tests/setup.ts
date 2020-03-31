import { GlobalWithFetchMock } from 'jest-fetch-mock';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;;

process.env.AES_KEY = 'dfsdfhjksdhfksjdhf';
process.env.HIVE_PUBLIC_KEY = 'STM5BqcVEu9Mb5LRrkYyrnNPrjt5qkbM1aEcKW37KtnNg4LBDThDk';

// (global as any).console = {
//     log: jest.fn(), // console.log are ignored in tests

//     // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
//     error: console.error,
//     warn: console.warn,
//     info: console.info,
//     debug: console.debug,
// };