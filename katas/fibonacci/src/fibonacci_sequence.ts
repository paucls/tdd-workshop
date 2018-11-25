export function fibonacciNumber(index: number): number {
    if (index < 2)
        return index;
    return fibonacciNumber(index - 1) + fibonacciNumber(index - 2);
}