export default function dichotomy(fun, a, b, E, count, setCount) {
  let c;
  count = 0;

  while (Math.abs(b - a) > E) {
    c = (a + b) / 2.0;
    if (fun(b, 3, 'none') * fun(c, 3, 'none') <= 0) {
      a = c;
    } else {
      b = c;
    }
    setCount(count++);
  }
  return (a + b) / 2;
}
