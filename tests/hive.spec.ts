import { Hive } from '../src/hive';

describe('Hive', () => {
    let sut;

    beforeEach(() => {
        sut = new Hive();
    });

    test('Generates a memo 6 characters in length', () => {
        expect(sut['generateMemo'](6)).toHaveLength(6);
    });

    test('Generates a memo using default 12 character length', () => {
        expect(sut['generateMemo']()).toHaveLength(12);
    });
});