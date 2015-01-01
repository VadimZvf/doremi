var string = require('../src/string');
var expect = require('chai').expect;

describe('string.contains()', function () {
    it('Should return true if string contains substring', function () {
        expect(string.contains('lorem ipsum', 'rem')).to.equal(true);
        expect(string.contains('lorem ipsum', 'i')).to.equal(true);
        expect(string.contains('lorem ipsum', 'or')).to.equal(true);
        expect(string.contains('lorem ipsum', 'sum')).to.equal(true);
    });

    it('Should return false if string does not contain substring', function () {
        expect(string.contains('lorem ipsum', '!')).to.equal(false);
        expect(string.contains('lorem ipsum', 'foo')).to.equal(false);
        expect(string.contains('lorem ipsum', 'bar')).to.equal(false);
    });

    it('Should work with empty strings', function () {
        expect(string.contains('', '')).to.equal(true);
        expect(string.contains('lorem ipsum', '')).to.equal(true);
    });

    it('Should treat null as empty string', function () {
        expect(string.contains(null, 'lorem ipsum')).to.equal(false);
        expect(string.contains(null, '')).to.equal(true);
        expect(string.contains('lorem ipsum', null)).to.equal(true);
        expect(string.contains('', null)).to.equal(true);
    });

    it('Should treat undefined as empty string', function () {
        expect(string.contains(void 0, 'lorem ipsum')).to.equal(false);
        expect(string.contains(void 0, '')).to.equal(true);
        expect(string.contains('lorem ipsum', void 0)).to.equal(true);
        expect(string.contains('', void 0)).to.equal(true);
    });

    it('Should start search at given index', function () {
        expect(string.contains('lorem ipsum', 'l', 0)).to.equal(true);
        expect(string.contains('lorem ipsum', 'i', 1)).to.equal(true);
        expect(string.contains('lorem ipsum', 'r', 3)).to.equal(false);
        expect(string.contains('lorem ipsum', 's', 300)).to.equal(false);
    });

    it('Should treat negative index as zero', function () {
        expect(string.contains('lorem ipsum', 'o', -1)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -9)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -10)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -11)).to.equal(true);
    });
});

describe('string.insert()', function () {
    it('Should insert a substring in a string', function () {
        expect(string.insert(', World!', 'Hello', 0)).to.equal('Hello, World!');
        expect(string.insert(', World!', 'Hello', null)).to.equal('Hello, World!');
        expect(string.insert('Hello, ', 'World!', 10)).to.equal('Hello, World!');
        expect(string.insert('Hello, Worl', 'd!', 12)).to.equal('Hello, World!');
        expect(string.insert('Hello, Worl', 'd!', '12')).to.equal('Hello, World!');
    });

    it('Should treat undefined index as zero', function () {
        expect(string.insert(', World!', 'Hello')).to.equal('Hello, World!');
        expect(string.insert(', World!', 'Hello', void 0)).to.equal('Hello, World!');
    });

    it('Should accept negative indexes', function () {
        expect(string.insert('Hello, Worl!', 'd', -1)).to.equal('Hello, World!');
        expect(string.insert('o, World!', 'Hell', -10)).to.equal('Hello, World!');
        expect(string.insert('o, World!', 'Hell', '-10')).to.equal('Hello, World!');
    });

    it('Should accept indexes large than the length of a string', function () {
        expect(string.insert('Hello, ', 'World!', 100)).to.equal('Hello, World!');
    });
});