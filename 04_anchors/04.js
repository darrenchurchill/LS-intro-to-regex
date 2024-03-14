/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 4: Anchors
 * Exercise 4
 *
 * https://launchschool.com/books/regex/read/anchors#exercises
 *
 * Write a regex that matches an entire line of text that consists of exactly
 * 3 words as follows:
 *
 * - The first word is `A` or `The`.
 * - There is a single space between the first and second words.
 * - The second word is any 4-letter word.
 * - There is a single space between the second and third words.
 * - The third word -- the last word -- is either `dog` or `cat`
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`A grey cat
A blue caterpillar
The lazy dog
The white cat
A loud dog
--A loud dog
Go away dog
The ugly rat
The lazy, loud dog`
);

console.log(string.match(/^(A|The) [a-z]{4} (dog|cat)$/gmi));
