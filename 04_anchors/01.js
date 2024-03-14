/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 4: Anchors
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/anchors#exercises
 *
 * Write a regex that matches the word `The` when it occurs at the beginning of
 * a line.
 *
 * There should be 2 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`The lazy cat sleeps.
The number 623 is not a word.
Then, we went to the movies.
Ah. The bus has arrived.`
);

console.log(string.match(/^The\b/gm));
