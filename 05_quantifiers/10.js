/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 10
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches lines of text that contain at least 3, but no
 * more than 6, consecutive separated numbers. In this exercise, you may assume
 * that the first number on each line is *not* preceded by a comma, and the last
 * number is *not* followed by a comma.
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
13,45,78,23,45,34,
13,45,78,23,45,34,56`
);

console.log(string.match(/^(\d+,){2,5}\d+$/gm));
