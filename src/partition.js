import _curry2 from './internal/_curry2'

/**
 * @name partition
 * @signature (a -> Boolean) -> [a] -> [[a]]
 * @since v0.16.0
 * @description
 * Partitions a list into two lists based on a predicate; the left contains
 * all values that matched the predicate, while the right includes those which
 * did not.
 *
 * @example
 * partition(isEven, [1, 2, 3, 4, 5]) // => [[2, 4], [1, 3, 5]]
 */
export default _curry2(function partition (pred, xs) {
  var left  = []
    , right = []
    , len   = xs.length
    , i     = 0

  for (; i < len; i++) {
    if (pred(xs[i])) {
      left[left.length] = xs[i]
    } else {
      right[right.length] = xs[i]
    }
  }
  return [left, right]
})
