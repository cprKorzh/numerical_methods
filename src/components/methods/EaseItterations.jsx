export default function easeItterations(fun, a, b, E, count, setCount) {
    let x0 = (a + b) / 2;
    let L = -x0;
    let xNxt = iterFun(x0, L);
    count = 0;
    
    function iterFun(x, L) {
        return (x + L * fun(x, 3, 'none'));   
     }

    while (Math.abs(xNxt - x0) > E) {
        x0 = xNxt;
        xNxt = iterFun(x0, L);
        console.log(xNxt)     
        setCount(count++);
    }
    return xNxt;
}