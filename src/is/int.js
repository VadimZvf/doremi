var number = require('./number');

/**
 * Checks if `target` is integer.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 *
 * @example
 *
 * is.int(42);
 * // => true
 *
 * is.int(42.42);
 * // => false
 *
 * is.int('42');
 * // => false
 */
module.exports = function int (target) {
    return number(target) && target % 1 === 0;
};