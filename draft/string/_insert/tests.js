import { VOID_0 } from '../../internal/constants';
import insert from '.';

describe('string/insert()', () => {
    test('inserts a substring in a string', () => {
        expect(insert(', World!', 'Hello', 0)).toBe('Hello, World!');
        expect(insert(', World!', 'Hello', null)).toBe('Hello, World!');
        expect(insert('Hello, ', 'World!', 10)).toBe('Hello, World!');
        expect(insert('Hello, Worl', 'd!', 12)).toBe('Hello, World!');
        expect(insert('Hello, Worl', 'd!', '12')).toBe('Hello, World!');
    });

    test('treats undefined index as zero', () => {
        expect(insert(', World!', 'Hello')).toBe('Hello, World!');
        expect(insert(', World!', 'Hello', VOID_0)).toBe('Hello, World!');
    });

    test('accepts negative indexes', () => {
        expect(insert('Hello, Worl!', 'd', -1)).toBe('Hello, World!');
        expect(insert('o, World!', 'Hell', -10)).toBe('Hello, World!');
        expect(insert('o, World!', 'Hell', '-10')).toBe('Hello, World!');
    });

    test('accepts indexes large than the length of a string', () => {
        expect(insert('Hello, ', 'World!', 100)).toBe('Hello, World!');
    });
});