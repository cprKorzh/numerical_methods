export default function goldenCut(fun, a, b, E, count, setCount) {
  let phi = (1 + Math.sqrt(5)) / 2;
  let y ;
  let z ;
  count = 0;

  while (Math.abs(b - a) > E) {

    y = b - (b - a) / phi;
    z = a + (b - a) / phi;

    if (fun(y, 3, 'none') >= fun(z, 3, 'none')) {
      a = y;
    } else {
      b = z;
    }

    setCount(count++);
  }
  return (a + b) / 2;
}
