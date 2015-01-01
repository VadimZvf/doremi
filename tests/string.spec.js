var string = require('../src/string');
var expect = require('chai').expect;

describe('string.capitalize()', function () {
    it('Should capitalize a string', function () {
        expect(string.capitalize('lorem ipsum')).to.equal('Lorem ipsum');
    });

    it('Should change only first letter of a string', function () {
        expect(string.capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
    });

    it('Should work with empty strings', function () {
        expect(string.capitalize('')).to.equal('');
        expect(string.capitalize()).to.equal('');
        expect(string.capitalize(void 0)).to.equal('');
        expect(string.capitalize(null)).to.equal('');
    });
});

describe('string.chop()', function () {
    it('Should return a string chopped into pieces', function () {
        expect(string.chop('lorem ipsum', 5)).to.deep.equal(['lorem', ' ipsu', 'm']);
        expect(string.chop('lorem ipsum', 4)).to.deep.equal(['lore', 'm ip', 'sum']);
        expect(string.chop('lorem ipsum', 3)).to.deep.equal(['lor', 'em ', 'ips', 'um']);
        expect(string.chop('lorem ipsum', 2)).to.deep.equal(['lo', 're', 'm ', 'ip', 'su', 'm']);
        expect(string.chop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Should work with null and undefined', function () {
        expect(string.chop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        expect(string.chop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Should treat negative step as zero', function () {
        expect(string.chop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });
});

describe('string.clean()', function () {
    it('Should remove all spaces', function () {
        expect(string.clean('           Hello,      World!             ')).to.equal('Hello, World!');
        expect(string.clean('                        ')).to.equal('');
    });

    it('Should remove all whitespace', function () {
        expect(string.clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
        expect(string.clean('\0 \b \t \n \v \f \r')).to.equal('');
    });
});

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

describe('string.count()', function () {
    it('Should find a substring', function () {
        expect(string.count('Hello, World!', 'l')).to.equal(3);
        expect(string.count('Hello, World!', 'll')).to.equal(1);
        expect(string.count(12345, 1)).to.equal(1);
        expect(string.count(99999, 9)).to.equal(5);
        expect(string.count(99999, 99)).to.equal(4);
    });

    it('Should not find a substring', function () {
        expect(string.count('Hello, World!', 'world')).to.equal(0);
        expect(string.count('Hello, World!', '! ')).to.equal(0);
    });

    it('Should work with null, undefined and empty strings', function () {
        expect(string.count('', 'x')).to.equal(0);
        expect(string.count('', '')).to.equal(0);
        expect(string.count(null, 'x')).to.equal(0);
        expect(string.count(void 0, 'x')).to.equal(0);
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

describe('string.join()', function () {
    it('Should join strings', function () {
        expect(string.join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).to.equal('lorem ipsum dolor sit amet');
        expect(string.join('', 'h', 'e', 'l', 'lo')).to.equal('hello');
        expect(string.join('+', 1, 2, 3)).to.equal('1+2+3');
    });

    it('Should ignore null, undefined and empty strings', function () {
        expect(string.join()).to.equal('');
        expect(string.join('', '', '')).to.equal('');
        expect(string.join(' ', null, null)).to.equal('');
        expect(string.join(' ', void 0, void 0)).to.equal('');
        expect(string.join(' ', 'lorem', void 0, void 0)).to.equal('lorem');
    });
});

describe('string.remove()', function () {
    it('Should remove a substring from a string', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello, 0, 2)).to.equal('llo, World!');
        expect(string.remove(hello, 0, 100)).to.equal('');
        expect(string.remove(hello, 0, hello.length)).to.equal('');
        expect(string.remove(hello, 90, 100)).to.equal('Hello, World!');
    });

    it('Should treat undefined index as zero', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello)).to.equal(hello);
        expect(string.remove(hello, void 0)).to.equal(hello);
        expect(string.remove(hello, void 0, void 0)).to.equal(hello);
        expect(string.remove(hello, null)).to.equal(hello);
        expect(string.remove(hello, null, null)).to.equal(hello);
    });

    it('Should accept negative indexes', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello, 0, -3)).to.equal('ld!');
        expect(string.remove(hello, 5, -1)).to.equal('Hello!');
        expect(string.remove(hello, 2, -2)).to.equal('Hed!');
        expect(string.remove(hello, -2, -1)).to.equal('Hello, Worl!');
        expect(string.remove(hello, -100, -90)).to.equal('Hello, World!');
    });
});

describe('string.trim()', function () {
    it('Should remove leading and trailing whitespaces', function () {
        expect(string.trim('           Hello, World!             ')).to.equal('Hello, World!');
        expect(string.trim('                        ')).to.equal('');
        expect(string.trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
        expect(string.trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Should remove leading and trailing given characters', function () {
        expect(string.trim('/* Hello, World! */', '/ ', '*')).to.equal('Hello, World!');
        expect(string.trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.trim()).to.equal('');
        expect(string.trim(void 0)).to.equal('');
        expect(string.trim(null)).to.equal('');
    });
});