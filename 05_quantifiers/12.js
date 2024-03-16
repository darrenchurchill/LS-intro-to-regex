/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 5: Quantifiers
 * Exercise 12
 *
 * https://launchschool.com/books/regex/read/quantifiers#exercises
 *
 * Write a regex that matches HTML h1 header tags and the content between the
 * opening and closing tags. If multiple header tags appear on one line, your
 * regex should match the opening and closing tags and the text content of the
 * headers, but nothing else. You may assume that there are no nested tags in
 * the text between `<h1>` and `</h1>`.
 *
 * There should be 4 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`<h1>Main Heading</h1>
<h1>Another Main Heading</h1>
<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>`
);

console.log(string.match(/<h1>.*?<\/h1>/g));
