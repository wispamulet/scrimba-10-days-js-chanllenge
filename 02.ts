/*
* Day 2: All longest Strings
* In this challenge, you'll:

* Given an array of strings, return another array containing all of its longest
* strings

* Example
* For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"]
*/

const allLongestStrings = (arr: string[]): string[] =>
  arr.filter(item => item.length === Math.max(...arr.map(str => str.length)));
