export default function Newton(fun, a, b, E, count, setCount) {
    count = 0;
    var x = (a + b) / 2;
    var xN = x - (fun(x, 3, "none") / fun(x, 3, "derivative"));
    while (Math.abs(xN - x) > E) {
        x = xN;
        xN = x - (fun(x, 3, "none") / fun(x, 3, "derivative"));
        setCount(++count);
        console.log(xN);
    }
    return xN;
}