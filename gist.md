# Email Verification Via Regular Expressions (Regex)

## Introduction

Regular expressions, often abbreviated as Regex, are powerful tools used in numerous programming languages to identify specific text patterns within strings. In this guide, we will explore a fundamental application of Regex for validating email addresses using JavaScript.

The tutorial covers two essential aspects of Regex:

1. Understanding the structure of the regular expression object and its syntax.
2. A concise introduction to the methods associated with the regular expression object.

Throughout this tutorial, we will work with a regular expression designed to validate email formats. The objective of this Regex application is to identify three substrings separated by a single "@" symbol and another "." character within a submitted email. The text preceding "@" is referred to as the email prefix, while the text to the right of "@" constitutes the email domain.

## Table of Contents

- [Regex Components](#components)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Character Classes](#character-classes)
- [Character Escapes](#character-escapes)
- [Putting It All Together](#puttingitalltogether)
- [Testing](#testing)
- [Additional Resources](#additionalresources)
- [About the Author](#aboutauthor)

---

## Understanding Regex Components <a id=components></a>

Regular expressions are composed of various constraints that define patterns for text search applications. Here's a simplified example of a Regex expression used for email validation:

There are two common ways to define a regular expression:

1. Using literal notation:

   ```javascript
   const reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   ```

2. Using a constructor function:

   ```javascript
   let reg_email = new RegExp(
     " ^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$ "
   );
   ```

The `reg_email` object appears complex, but we'll break down its components to understand the pattern it defines. The object has methods like `exec()`, `test()`, as well as interactions with string methods like `match()`, `replace()`, and more.

For this tutorial, we'll use the `test()` method to demonstrate how `reg_email` can validate email formats. Keep in mind that more intricate pattern testing can be customized.

```javascript
let isValid = reg_email.test(input_email);
```

Where `isValid` is a Boolean value that's `true` when the `input_email` string adheres to the rules defined in `reg_email`.

---

## Anchoring the Pattern <a id=anchors></a>

The regular expression starts and ends with forward slashes ("/"), defining boundaries for the pattern. The "^" symbol signifies the start, and "$" symbol marks the end of the string.

Other types of anchors exist but aren't utilized in this specific Regex expression.

---

## Quantifying Patterns <a id=quantifiers></a>

Quantifiers specify the number or range of characters to match. Examples of quantifiers include "_", "+", "?", and "{num1,num2}". For instance, "_" allows any number of preceding matches (including 0), "+" requires at least one match, "?" matches 0 or 1 time, and "{num1,num2}" specifies a range of occurrences between `num1` and `num2`.

In our expression, "\w+" denotes any sequence of letters, and "\w{2,3}" indicates a character sequence of length 2 to 3.

---

## Grouping for Structure <a id="grouping-constructs"></a>
