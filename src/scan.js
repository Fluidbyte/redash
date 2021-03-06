import _curry3 from './internal/_curry3'

/**
 * @name scan
 * @signature (b, a -> b) -> b -> [a] -> [b]
 * @since v0.12.0
 * @description
 * Similar to reduce, but, instead of returning the final accumulator value,
 * returns a list containing each iteration of the accumulator.
 * @see reduce
 *
 * @example
 * // initial accumulator  --> 0
 * // first step:  0 + 1   --> 1
 * // second step: 1 + 2   --> 3
 * // third step:  3 + 3   --> 6
 * // fourth step: 6 + 4   --> 10
 * scan(add, 0, [1, 2, 3, 4]) // => [0, 1, 3, 6, 10]
 */
export default _curry3(function scan (fn, acc, as) {
  var i   = 0
    , len = as.length
    , bs  = [acc]

  for (; i < len; i++) {
    acc = fn(acc, as[i])
    bs[bs.length] = acc
  }
  return bs
})
