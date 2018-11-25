import { cases } from "jasmine-parameterized"
import { fibonacciNumber } from "../src/fibonacci_sequence";

describe('Fibonacci Sequence', () => {

    describe('First two numbers', () => {
        cases([
            [0, 0],
            [1, 1]
        ])
        .it('should be same as index', ([index, number]) => {
            expect(fibonacciNumber(index)).toEqual(number);
        });
    });

    describe('Third number on', () => {
        cases([
            [2, 1],
            [3, 2],
            [5, 5]
        ])
        .it('should be the sum of previous two', ([index, number]) => {
            expect(fibonacciNumber(index)).toEqual(number);
        });
    });

});