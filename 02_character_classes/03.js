/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 2: Character Classes
 * Exercise 3
 *
 * https://launchschool.com/books/regex/read/character_classes#exercises
 *
 * NOTE: Use character classes in these exercises. Don't use alternation when
 * character classes will suffice.
 *
 * Base 20 digits include the decimal digits 0 through 9, and the letters A
 * through J in upper or lowercase. Write a regex that matches base 20 digits.
 *
 * There should be 28 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`0xDEADBEEF
1234.5678
Jamaica
plow ahead`
);

console.log(string.match(/[0-9a-jA-J]/g));
