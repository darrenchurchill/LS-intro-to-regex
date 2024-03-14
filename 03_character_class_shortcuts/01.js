/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 3: Character Class Shortcuts
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/class_shortcuts#exercises
 *
 * Write a regex that matches any sequence of 3 characters delimited by
 * whitespace characters (the regex should match both the delimiting whitespace
 * and the sequence of 3 characters).
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`reds and blues
the lazy cat sleeps`
);

console.log(string.match(/\s...\s/g));
