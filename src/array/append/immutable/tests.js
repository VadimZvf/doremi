import append from '.';

describe('array/append/immutable()', () => {
    test('appends items of second array to the end of first array', () => {
        expect(append([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('appends an empty array', () => {
        expect(append([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(append([], [4, 5, 6])).toEqual([4, 5, 6]);
    });

    test('returns new array with appended items', () => {
        const target = [1, 2, 3];
        const source = [4, 5, 6];
        const expected = [1, 2, 3, 4, 5, 6];
        const received = append(target, source);

        expect(received).not.toBe(target);
        expect(received).toEqual(expected);
    });
});