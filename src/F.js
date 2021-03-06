/**
 * @name F
 * @signature Any -> Boolean
 * @since v0.16.0
 * @description
 * Always returns false; equivalent to `always(false)`.
 * Use `T` for a true stub.
 * @see T
 *
 * @example
 * times(F, 5) // => [false, false, false, false, false]
 */
export default function F () {
  return false
}
