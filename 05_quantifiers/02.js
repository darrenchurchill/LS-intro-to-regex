/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 2
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches any line of text that ends with a `?`.
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`What's up, doc?
Say what? No way.
?
Who? What? Where? When? How?`
);

console.log(string.match(/^.*\?$/gm));
