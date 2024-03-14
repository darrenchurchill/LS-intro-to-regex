/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 4
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches any line of text that contains nothing but a URL.
 * For this exercise, a URL begins with `http://` or `https://`, and continues
 * until it detects a whitespace character or the end of line.
 *
 * There should be 2 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`https://launchschool.com/
http://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/a.cgi?a=p&c=0 hello
    https://launchschool.com/`
);

console.log(string.match(/^https?:\/\/\S*$/gm));
