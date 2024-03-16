/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 11
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches lines of text that contain either 3 comma
 * separated numbers or 6 or more comma separated numbers.
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`123,456,789,123,345
123,456,,789,123
23,56,7
13,45,78,23,45,34
13,45,78,23,45,34,56`
);

console.log(string.match(/^((\d+,){2}|(\d+,){5,})\d+$/gm));
