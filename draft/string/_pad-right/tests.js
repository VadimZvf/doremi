import { VOID_0 } from '../../internal/constants';
import padRight from '.';

describe('string/padRight()', () => {
    test('adds characters to the right', () => {
        expect(padRight('lorem', 4, '^')).toBe('lorem');
        expect(padRight('lorem', 5, '^')).toBe('lorem');
        expect(padRight('lorem', 6, '^')).toBe('lorem^');
        expect(padRight('lorem', 7, '^')).toBe('lorem^^');
        expect(padRight('lorem', 8, '^')).toBe('lorem^^^');
    });

    test('takes only first character of padding string', () => {
        expect(padRight('lorem', 6, '#')).toBe('lorem#');
        expect(padRight('lorem', 6, '%#')).toBe('lorem%');
        expect(padRight('lorem', 6, '&%#')).toBe('lorem&');
        expect(padRight('lorem', 6, '$&%#')).toBe('lorem$');
    });

    test('works with null and undefined', () => {
        expect(padRight(VOID_0, 5, '*')).toBe('undefined');
        expect(padRight(null, 5, '*')).toBe('null*');
    });
});