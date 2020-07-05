/*
- Day 10: Max Multiple
  In this challenge, you'll:

  Given a divisor and a bound, find the largest integer N such that:
  1. N is divisible by divisor.
  2. N is less than or equal to bound.
  3. N is greater than 0.

  It it guaranteed that such a number exists.

- Example
  For divisor = 3 and bound = 10, the output should be maxMultiple(divisor, bound) = 9.
  The largest integer divisible by 3 and not larger than 10 is 9.
*/

const maxMultiple = (divisor: number, bound: number): number => {
  for (let n = bound; n > 0; n -= 1) {
    if (n % divisor === 0) {
      return n;
    }
  }
};

const maxMultiple2 = (divisor: number, bound: number): number =>
  Math.floor(bound / divisor) * divisor;
