import _slice from './internal/_slice'

/**
 * @name init
 * @signature [a] -> [a]
 * @since v0.17.0
 * @description
 * Returns all but the last element of a list.
 * @see head
 * @see tail
 *
 * @example
 * init([1, 2, 3, 4]) // => [1, 2, 3]
 * init([1])          // => []
 * init([])           // => []
 */
export default function init (xs) {
  return _slice.call(xs, 0, xs.length - 1)
}
