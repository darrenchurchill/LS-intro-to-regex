/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 1: Basic Matching
 * Exercise 3
 *
 * https://launchschool.com/books/regex/read/basic_matching#exercises
 *
 * Write a regex that matches the string `dragon`.
 *
 * There should be 2 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`snapdragon
bearded dragon
dragoon`
);

console.log(string.match(/dragon/g));
