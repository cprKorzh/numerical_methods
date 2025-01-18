export default function Khord (fun, a, b, E, count, setCount) {
    count = 0;

    if(Math.abs(a) > Math.abs(b)) {
        return a;
    } else if (Math.abs(b) > Math.abs(a)) {
        while(Math.abs(fun(b, 3, "none")) > E) {
            a = b - (((b - a) * fun(b, 3, "none")) / (fun(b, 3, "none") - fun(a, 3, "none")))
            b = a - (((a - b) * fun(a, 3, "none")) / (fun(a, 3, "none") - fun(b, 3, "none")))
            setCount(++count);
        }
        return b;
    } else if (Math.abs(b) === Math.abs(a)) {
        setCount(0);
        return b;
    }
}