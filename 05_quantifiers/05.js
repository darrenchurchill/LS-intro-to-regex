/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 5
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Modify your regex from the previous exercise so the URL can have optional
 * leading or trailing whitespace, but is otherwise on a line by itself. To test
 * your regex with trailing whitespace, you must add some spaces to the end of
 * some lines in your sample text.
 *
 * There should be 3 matches.
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

console.log(string.match(/^\s*https?:\/\/\S*\s*$/gm));
