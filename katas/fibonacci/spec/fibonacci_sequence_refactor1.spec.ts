import { fibonacciNumber } from "../src/fibonacci_sequence";

describe('Fibonacci Sequence', () => {

    describe('First two numbers', () => {
        it('should be same as index', () => {
            expect(fibonacciNumber(0)).toEqual(0);
            expect(fibonacciNumber(1)).toEqual(1);
        });
    });

    describe('Third number on', () => {
        it('should be the sum of previous two', () => {
            expect(fibonacciNumber(2)).toEqual(1);
            expect(fibonacciNumber(3)).toEqual(2);
            expect(fibonacciNumber(5)).toEqual(5);
        });
    });

});