import mockDate from 'mockdate';
import { INVALID_DATE } from '../../constants/errors';
import isFuture from '.';

describe('date/isFuture()', () => {
    test('returns true if the date is future', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isFuture(new Date(2015, 2, 24))).toBe(true);
        expect(isFuture(new Date(2015, 3, 23))).toBe(true);
        expect(isFuture(new Date(2016, 2, 23))).toBe(true);

        mockDate.reset();
    });

    test('returns false if the date is not future', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isFuture(new Date(2015, 2, 22))).toBe(false);
        expect(isFuture(new Date(2015, 1, 23))).toBe(false);
        expect(isFuture(new Date(2014, 2, 23))).toBe(false);

        mockDate.reset();
    });

    test('throws the error if value is invalid', () => {
        const invalidDate = new Date('Invalid date');

        expect(() => isFuture(invalidDate)).toThrow(INVALID_DATE);
    });
});
