import object, { getValue, invert, isObject, isPlain, namespace, pairs, property, result, setValue, template, values } from '.';

describe('doremi/object', () => {
    test('Imports doremi/object as object', () => {
        expect(object).toEqual(expect.any(Object));
    });

    test('doremi/object has correct properties', () => {
        expect(object).toHaveProperty('getValue', getValue);
        expect(object).toHaveProperty('invert', invert);
        expect(object).toHaveProperty('isObject', isObject);
        expect(object).toHaveProperty('isPlain', isPlain);
        expect(object).toHaveProperty('namespace', namespace);
        expect(object).toHaveProperty('pairs', pairs);
        expect(object).toHaveProperty('property', property);
        expect(object).toHaveProperty('result', result);
        expect(object).toHaveProperty('setValue', setValue);
        expect(object).toHaveProperty('template', template);
        expect(object).toHaveProperty('values', values);
    });
});