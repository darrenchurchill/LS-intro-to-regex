/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 3: Character Class Shortcuts
 * Exercise 4
 *
 * https://launchschool.com/books/regex/read/class_shortcuts#exercises
 *
 * Write a regex that matches any sequence of three letters.
 *
 * There should be 7 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`The red d0g chases the b1ack cat.
a_b c_d`
);

console.log(string.match(/[a-z]{3}/gi));
