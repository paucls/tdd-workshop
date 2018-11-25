import { fibonacciNumber } from "../src/fibonacci_sequence";

describe('Fibonacci Sequence', () => {

    describe('First number', () => {
        it('should be 0', () => {
            expect(fibonacciNumber(0)).toEqual(0);
        });
    });

    describe('Second number', () => {
        it('should be 1', () => {
            expect(fibonacciNumber(1)).toEqual(1);
        });
    });

    describe('Third number', () => {
        it('should be 1', () => {
            expect(fibonacciNumber(2)).toEqual(1);
        });
    });

    describe('Fourth number', () => {
        it('should be 2', () => {
            expect(fibonacciNumber(3)).toEqual(2);
        });
    });

    describe('Sixth number', () => {
        it('should be 5', () => {
            expect(fibonacciNumber(5)).toEqual(5);
        });
    });

});