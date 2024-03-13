/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 2: Character Classes
 * Exercise 6
 *
 * https://launchschool.com/books/regex/read/character_classes#exercises
 *
 * NOTE: Use character classes in these exercises. Don't use alternation when
 * character classes will suffice.
 *
 * Write a regex that matches any character that is not a letter, a space, a
 * carriage returns (`\n`), or a line feed (`\r`).
 *
 * There should be 33 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`0x1234abcd
1,000,000,000s and 1,000,000,000s.
THE quick BROWN fox JUMPS over THE lazy DOG!`
);

console.log(string.match(/[^a-z \n\r]/gi));
