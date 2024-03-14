/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 7
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches any word than contains at least three occurrences
 * of the letter `i`.
 *
 * Note that `0minimize7` is **not** a word.
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`Mississippi
ziti 0minimize7
inviting illegal iridium`
);

console.log(string.match(/\b([a-z]*i[a-z]*){3,}\b/gi));
