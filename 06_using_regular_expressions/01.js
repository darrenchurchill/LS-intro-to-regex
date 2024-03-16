/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 6: Using Regular Expressions in JavaScript
 * Exercise 1
 *
 * https://launchschool.com/books/regex/read/using#exercises
 *
 * Write a method that returns true if its argument looks like a URL, false if
 * it does not.
 */
"use strict";

function isUrl(string) {
  return !!string.match(/^https?:\/\/\S+$/);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false
