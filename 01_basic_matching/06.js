/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 1: Basic Matching
 * Exercise 6
 *
 * https://launchschool.com/books/regex/read/basic_matching#exercises
 *
 * Write a regex that matches `blueberry` or `blackberry`, but write `berry`
 * in your regular expression precisely once.
 *
 * There should be 2 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`blueberry
blackberry
black berry
strawberry`
);

console.log(string.match(/(blue|black)berry/g));
