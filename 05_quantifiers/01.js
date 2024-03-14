/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches any word that begins with `b` and ends with an
 * `e`, and has any number of letters in-between. You may limit your regex to
 * lowercase letters.
 *
 * There should be 4 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`To be or not to be
Be a busy bee
I brake for animals.`
);

console.log(string.match(/b[a-z]*e/g));
