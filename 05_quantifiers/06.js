/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 6
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Modify your regex from the previous exercise so the URL can appear anywhere
 * on each line, so long as it begins at a word boundary.
 *
 * There should be 5 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`https://launchschool.com/` + `   ` + `
http://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/a.cgi?a=p&c=0 hello
    https://launchschool.com/`
);

console.log(string.match(/\bhttps?:\/\/\S*/g));
