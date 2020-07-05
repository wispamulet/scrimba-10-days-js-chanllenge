/*
- Day 9: Largest Number
  In this challenge, you'll:

- Example
  For n = 2, the output should be largestNumber(n) = 99.
*/

const largestNumber = (n: number): number =>
  parseInt(
    [...new Array(n)].reduce(acc => `${acc}9`, ''),
    10
  );
