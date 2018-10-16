import isEmpty from '.';

describe('string/isEmpty()', () => {
    test('returns true for an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('returns false for other strings', () => {
        expect(isEmpty('hello')).toBe(false);
        expect(isEmpty('apple, orange')).toBe(false);
        expect(isEmpty(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).toBe(false);
    });
});