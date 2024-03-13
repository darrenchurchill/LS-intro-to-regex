/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 2: Character Classes
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/character_classes#exercises
 *
 * NOTE: Use character classes in these exercises. Don't use alternation when
 * character classes will suffice.
 *
 * Write a regex that matches uppercase or lowercase `K`s or a lowercase `s`.
 *
 * There should be 6 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`Kitchen Kaboodle
Reds and blues
kitchen Servers`
);

console.log(string.match(/[kKs]/g));
