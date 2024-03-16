/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 6: Using Regular Expressions in JavaScript
 * Exercise 2
 *
 * https://launchschool.com/books/regex/read/using#exercises
 *
 * Write a method that returns all of the fields in a haphazardly formatted
 * string. A variety of spaces, tabs, and commas separate the fields, with
 * possibly multiple occurrences of each delimiter.
 */
"use strict";

function fields(string) {
  return string.split(/[ ,\t]+/);
}

console.log(fields("Pete,201,Student"));    // ['Pete', '201', 'Student']
console.log(fields("Pete \t 201   ,  TA")); // ['Pete', '201', 'TA']
console.log(fields("Pete \t 201"));         // ['Pete', '201']
console.log(fields("Pete \n 201"));         // ['Pete', '\n', '201']
