/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 6: Using Regular Expressions in JavaScript
 * Exercise 3
 *
 * https://launchschool.com/books/regex/read/using#exercises
 *
 * Write a method that changes the first arithmetic operator (`+`, `-`, `*`,
 * `/`) in a string to a '?' and returns the resulting string. Don't modify the
 * original string.
 */
"use strict";

function mysteryMath(equation) {
  return equation.replace(/[+\-*/]/, "?");
}

console.log(mysteryMath('4 + 3 - 5 = 2'));            // '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));  // '(4 ? 3 + 2) / 7 - 1 = 1'
