/*
* Day 4: Array Replace
* In this challenge, you'll:

* Given an array of integers, replace all the occurrence of elemToReplace with substitutionElem.

* Example
* For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]
*/

const arrayReplace = (
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] =>
  inputArray.map(elem => (elem === elemToReplace ? substitutionElem : elem));
