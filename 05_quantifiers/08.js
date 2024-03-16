/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 8
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches the last word in each line of text. For this
 * exercise, assume that words are any sequence of non-whitespace characters.
 *
 * There should be 5 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`What's up, doc?
I tawt I taw a putty tat!
Thufferin' thuccotath!
Oh my darling, Clementine!
Camptown ladies sing this song, doo dah.`
);

// My original solution
console.log(string.match(/\b\S*$/gm));

// An alternative book solution
console.log(string.match(/\S+$/gm));
