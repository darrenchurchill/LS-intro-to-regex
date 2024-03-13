/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 1: Basic Matching
 * Exercise 4
 *
 * https://launchschool.com/books/regex/read/basic_matching#exercises
 *
 * Write a regex that matches any of the following fruits:
 * - banana
 * - orange
 * - apple
 * - strawberry
 *
 * The fruits may appear in other words.
 *
 * There should be 5 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`banana
orange
pineapples
strawberry
raspberry
grappler`
);

console.log(string.match(/banana|orange|apple|strawberry/g));
