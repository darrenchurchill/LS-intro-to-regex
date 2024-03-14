/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 4: Anchors
 * Exercise 2
 *
 * https://launchschool.com/books/regex/read/anchors#exercises
 *
 * Write a regex that matches the word `cat` when it occurs at the end of a
 * line.
 *
 * There should be 1 match.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`The lazy cat sleeps
The number 623 is ot a cat
The Alaskan drives a snowcat`
);

console.log(string.match(/\bcat$/gm));
