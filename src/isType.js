import _type from './type'
import _curry2 from './internal/_curry2'

/**
 * @name isType
 * @signature (String | Function) -> Boolean
 * @since v0.13.0
 * @description
 * Returns whether or not a value is of an expected. If the provided type is
 * a string, a `typeof` check is used. If a constructor is passed it will
 * be compared against the value's constructor.
 *
 * @example
 * const isString = isType('string')
 *
 * isString('hello!')    // => true
 * isType('number', 123) // => true
 */
export default _curry2(function isType (type, a) {
  if (typeof type === 'undefined') {
    return typeof a === 'undefined'
  }
  if (type == null) {
    return a == null && typeof a !== 'undefined'
  }

  return typeof type === 'string'
    ? _type(a).toLowerCase() === type.toLowerCase()
    : a instanceof type || a.constructor === type
})
