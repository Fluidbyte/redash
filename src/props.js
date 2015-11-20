import _curryN from './internal/_curryN';

var props = _curryN(2, [], function props (ps, x) {
  var i   = 0,
      len = ps.length,
      ys  = new Array(len);

  for (; i < len; i++) {
    ys[i] = x[ps[i]];
  }
  return ys;
});

export default props;