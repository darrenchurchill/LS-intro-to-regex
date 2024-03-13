/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 1: Basic Matching
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/basic_matching#exercises
 *
 * Write a regex that matches an uppercase `K`.
 *
 * There should be 2 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`Kx
BlacK
kelly`
);

console.log(string.match(/K/g));
