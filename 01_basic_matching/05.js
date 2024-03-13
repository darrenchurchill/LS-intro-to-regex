/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 1: Basic Matching
 * Exercise 5
 *
 * https://launchschool.com/books/regex/read/basic_matching#exercises
 *
 * Write a regex that matches a comma or a space.
 *
 * There should be 7 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`This line has spaces
This,line,mas,commas,
No-spaces-or-commas`
);

console.log(string.match(/ |,/g));
