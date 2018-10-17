import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import delay from '.';

describe('func/delay()', () => {
    test('returns a new function', () => {
        expect(delay(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('return a new function that invoked after 50 milliseconds', () => {
        jest.useFakeTimers();
        const fn = jest.fn();
        const delayed = delay(fn, 50);

        delayed();

        jest.runTimersToTime(49);
        expect(fn).not.toHaveBeenCalled();

        jest.runTimersToTime(1);
        expect(fn).toHaveBeenCalled();

        jest.clearAllTimers();
    });

    test('throws exception if function is invalid', () => {
        expect(() => delay('jest.fn()', 100)).toThrow(INVALID_FUNCTION_ARGUMENT);
    });
});