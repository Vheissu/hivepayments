import { Hive } from '../src/hive';

describe('Hive', () => {
    let sut;

    beforeEach(() => {
        sut = new Hive();
    });

    test('passes', () => {
        expect(true).toBeTruthy();
    })
});