/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 2: Character Classes
 * Exercise 9
 *
 * https://launchschool.com/books/regex/read/character_classes#exercises
 *
 * NOTE: Use character classes in these exercises. Don't use alternation when
 * character classes will suffice.
 *
 * Write a regex that matches a string that looks like a negated character class
 * range, e.g. `'[^a-z]'`. Your answer should match precisely six characters.
 * The match does not include the slash characters.
 *
 * There should be 3 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`The regex /[^a-z]/i matches any character that is
not a letter. Similarly, /[^0-9]/ matches any
non-digit while /[^A-Z]/ matches any character
that is not an uppercase letter. Beware: /[^+-<]/
is at best obscure, and may even be wrong.`
);

// Either of these will provide the desired 3 matches
console.log(string.match(/\[\^[0-9a-z]-[0-9a-z]\]/gi));
console.log(string.match(/\[\^\w-\w\]/g));

// This will include the final range, which is valid (+ comes before < in the
// ASCII table), but not intendede to match in our solution.
console.log(string.match(/\[\^.-.\]/g));
