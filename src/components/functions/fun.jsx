export default function fun(x, degree, addition) {
    return addition === "derivative"
        ? Math.pow(degree * x, degree - 1)
        : Math.pow(x, degree);
}