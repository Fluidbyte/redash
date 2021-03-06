import _curry3 from './internal/_curry3'

/**
 * @name rangeBy
 * @signature Number -> Number -> Number -> [Number]
 * @since v0.7.0
 * @description
 * Returns containing all numbers between at an initial value (inclusive)
 * and an end value (exclusive), where each subsequent value has been
 * incremented by the provided step.
 * @see range
 *
 * @example
 * rangeBy(4, 0, 17) // => [0, 4, 8, 12, 16]
 */
export default _curry3(function rangeBy (inc, start, end) {
  var ys = []
    , times
    , i

  if (inc === 0) {
    throw new Error(
      'The `increment` value provided to `rangeBy` must be a non-zero number.'
    )
  } else if (start === end) {
    throw new Error(
      'The `start` value provided to `rangeBy` must be greater than or less than ' +
      'the `end` value. Received the same value for both: ' + start + '.'
    )
  } else if (inc > 0 && start > end) {
    throw new Error(
      'The `increment` value provided to `rangeBy` must be negative when ' +
      'the start value (' + start + ') is greater than the end value (' +
      end + '). Received: ' + inc + '.'
    )
  } else if (inc < 0 && start < end) {
    throw new Error(
      'The `increment` value provided to `rangeBy` must be positive when ' +
      'the start value (' + start + ') is less than the end value (' +
      end + '). Received: ' + inc + '.'
    )
  }

  times = Math.abs(Math.ceil((end - start) / inc))
  for (i = 0; i < times; i++) {
    ys.push(start + (inc * i))
  }
  return ys
})
