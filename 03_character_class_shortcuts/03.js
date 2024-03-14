/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 3: Character Class Shortcuts
 * Exercise 3
 *
 * https://launchschool.com/books/regex/read/class_shortcuts#exercises
 *
 * Write a regex that matches any four digit hexadecimal number that is both
 * preceded and followed by whitespace. Note that `0x1234` is not a hexadecimal
 * number in this exercise: there is no space before the number `1234`.
 *
 * There should be 4 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`Hello 4567 bye CDEF - cdef
0x1234 0x5678 0xABCD
1F8A done`
);

console.log(string.match(/\s[\da-f]{4}\s/gi));
