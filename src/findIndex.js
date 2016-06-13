import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * findIndex : (a -> Boolean) -> [a] -> Number
 *
 * @since v0.1.0
 */
export default _curry2(function findIndex (pred, xs) {
  var _i = -1

  _arrayEach(function (x, i) {
    if (pred(x)) {
      _i = i
      return true
    }
  }, xs)

  return _i
})
