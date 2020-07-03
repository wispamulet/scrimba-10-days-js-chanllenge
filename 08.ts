/*
- Day 8:First Digit
  In this challenge, you'll:

  Find the leftmost digit the occurs in a given string.

- Example
  For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';
  For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';
  For inputString = "0ss", the output should be firstDigit(inputString) = '0;
*/

const firstDigit = (str: string): string => str.match(/\d/).join('');
