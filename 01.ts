/*
* Day 1: Add
* In this challenge, you'll:

* 1. Write a function that returns the sum of two numbers.
* 2. Write a functions that returns the sum of all numbers regardless of
* the number of parameters.

* Example
* For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
*/

const add = (a: number, b: number): number => a + b;

const addAll = (...rest: number[]): number =>
  rest.reduce((acc, cur) => acc + cur, 0);
