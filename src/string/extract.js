'use strict';

import toString from '../to/toString';
import set from '../object/set';

const es6 = ['${', '}'];
const escape = target => target.replace(/[\\\^\$\*\+\.\?\(\)]/g, '\\$&');

export default function (target, pattern, seps = es6) {
    target = toString(target);

    if (target.length === 0 || target === pattern) {
        return null;
    }

    const escaped = seps.map(x => escape(x));
    const syntax = new RegExp(`${escaped[0]}[^${seps.join('')}]+?${escaped[1]}`, 'g');
    const regex = new RegExp(pattern.split(syntax).map(x => escape(x)).join('(.+)'));

    let tokens = pattern.match(syntax);

    if (!tokens) {
        return null;
    }

    let matches = target.match(regex);

    if (!matches) {
        return null;
    }

    matches = matches.splice(1);
    tokens = tokens.map(x => x.replace(new RegExp(escaped.join('|'), 'g'), ''));

    let result = {};

    tokens.forEach((token, i) => set(result, token, matches[i]));

    return result;
}