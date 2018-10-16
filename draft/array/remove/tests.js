import { VOID_0 } from '../../internal/constants';
import remove from '.';

describe('array/_remove()', () => {
    test('modify the array and return removed elements', () => {
        const target = [1, 2, 3, 4, 5, 6];
        const result = remove(target, x => x % 2 === 0);

        expect(target).toEqual([1, 3, 5]);
        expect(result).toEqual([2, 4, 6]);
    });

    test('do not modify the array if predicate returns false for all elements', () => {
        const target = [1, 2, 3, 4, 5, 6];
        const result = remove(target, x => !x);

        expect(target).toEqual([1, 2, 3, 4, 5, 6]);
        expect(result).toEqual([]);
    });

    test('returns empty arrays for empty arrays', () => {
        const target = [];
        const result = remove(target, x => x % 2 === 0);

        expect(target).toEqual([]);
        expect(result).toEqual([]);
    });

    test('treats `null` or `undefined` as empty array', () => {
        const truthy = x => !!x;

        expect(remove(null, truthy)).toEqual([]);
        expect(remove(VOID_0, truthy)).toEqual([]);
    });
});