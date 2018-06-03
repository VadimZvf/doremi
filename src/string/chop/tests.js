import { VOID_0 } from '../../internal/constants';
import chop from '.';

describe('string/chop()', () => {
    test('returns a string chopped into pieces', () => {
        expect(chop('lorem ipsum', 5)).toEqual(['lorem', ' ipsu', 'm']);
        expect(chop('lorem ipsum', 4)).toEqual(['lore', 'm ip', 'sum']);
        expect(chop('lorem ipsum', 3)).toEqual(['lor', 'em ', 'ips', 'um']);
        expect(chop('lorem ipsum', 2)).toEqual(['lo', 're', 'm ', 'ip', 'su', 'm']);
        expect(chop('lorem ipsum', 1)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', 0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('haha', 2)).toEqual(['ha', 'ha']);
    });

    test('works with null and undefined', () => {
        expect(chop(1234567890)).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        expect(chop('lorem ipsum')).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', VOID_0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', null)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    test('treats negative step as zero', () => {
        expect(chop('lorem ipsum', -0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', -10)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chop('lorem ipsum', -1000)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });
});
