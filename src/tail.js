import _slice from './internal/_slice'

/**
 * tail : [a] -> [a]
 *
 * @since v0.1.0
 */
export default function tail (xs) {
  return _slice(xs, 1)
}
