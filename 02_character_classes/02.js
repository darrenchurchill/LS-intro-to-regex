/**
 * Darren Churchill
 *
 * Launch School Book Exercises
 * Introduction to Regular Expressions
 *
 * Chapter 2: Character Classes
 * Exercise 2
 *
 * https://launchschool.com/books/regex/read/character_classes#exercises
 *
 * NOTE: Use character classes in these exercises. Don't use alternation when
 * character classes will suffice.
 *
 * Write a regex that matches any of the strings `cat`, `cot`, `cut`, `bat`,
 * `bot`, or `but`, regardless of case.
 *
 * There should be 9 matches.
 */
"use strict";

let string = (
// eslint-disable-next-line indent
`My cats, Butterscotch and Pudding, like to
sleep on my cot with me, but they cut my sleep
short with acrobatics when breakfast time rolls
around. I need a robotic cat feeder.`
);

console.log(string.match(/[cbCB][aouAOU][tT]/g));
