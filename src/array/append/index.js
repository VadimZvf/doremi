/**
 * Appends items of an array to the end of other.
 *
 * @param target {Array} The array to modify.
 * @param source {Array} The array to append.
 * @returns {*} {Array} Returns `target` with appended items of `source`.
 *
 * @example
 * const foo = [3, 6, 9, 12];
 * const bar = [4, 7, 10, 13];
 *
 * append(foo, bar);
 * // => [3, 6, 9, 12, 4, 7, 10, 13]
 */
export default function (target, source) {
    target.push(...source);
    return target;
}
