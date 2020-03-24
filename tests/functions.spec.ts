import { roundPrecision, randomRange } from '../src/functions';

describe('Functions', () => {

    describe('Round Precision', () => {
        test('Properly rounds precision of number to 3 places', () => {
            const value = 99.299223;
    
            expect(roundPrecision(value, 3)).toStrictEqual(99.299);
        });
    
        test('Properly rounds precision of number up and to 3 places', () => {
            const value = 99.2966;
    
            expect(roundPrecision(value, 3)).toStrictEqual(99.297);
        });
    
        test('Invalid numeric values passed', () => {
            expect(roundPrecision('dasd', 3)).toBeNaN();
        });
    });

    describe('Random Range', () => {
        test('Should generate a random number between 0 and 10', () => {
            expect(randomRange(0, 10)).toBeLessThanOrEqual(10);
        });

        test('Should generate the number 10', () => {
            expect(randomRange(10, 10)).toStrictEqual(10);
        });

        test('Only pass min and not max', () => {
            expect(randomRange(0)).toBeLessThanOrEqual(2000);
        });

        test('Pass non numeric values to random range', () => {
            expect(randomRange('dd' as any, 'asjj' as any)).toBeNaN();
        });
    });

});