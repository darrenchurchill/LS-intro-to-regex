/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 4: Anchors
 * Exercise 3
 *
 * https://launchschool.com/books/regex/read/anchors#exercises
 *
 * Write a regex that matches any three-letter word; a word is any string
 * comprised entirely of letters.
 *
 * There should be 5 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`reds and blues
The lazy cat sleeps.
The number 623 is not a word. Or is it?`
);

console.log(string.match(/\b[a-z]{3}\b/gmi));
