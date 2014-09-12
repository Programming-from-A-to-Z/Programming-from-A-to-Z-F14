# Programming from A to Z, Spring 2014

This course focuses on programming strategies and techniques behind procedural analysis and generation of text-based data. We'll explore topics ranging from evaluating text according to its statistical properties to the automated production of text with probabilistic methods to text visualization. Students will learn server-side and client-side JavaScript programming and develop projects that can be shared and interacted with online.  There will be weekly homework assignments as well as a final project.

## Info
- Daniel Shiffman, Fridays, 12:10pm-2:40pm
- [Course Notes](http://shiffman.net/teaching/a2z/)
- All example code in this repo.

## Mailing List
* [Join ITP A2Z Google Group](https://groups.google.com/a/nyu.edu/forum/#!forum/a2z-group/).

## Week 1 - Sep 5
### Course intro / expectations
* Where to find course materials
* Overview / syllabus
* Homework / final project

### [Week 1 Notes](http://shiffman.net/teaching/a2z/week1/)
* [Beyond Processing and into JavaScript and p5.js](http://shiffman.net/teaching/a2z/week1/#beyond)
* [Installing Node](http://shiffman.net/teaching/a2z/week1/#node)
* [JavaScript 101](http://shiffman.net/teaching/a2z/week1/#js101)
* [Strings in JavaScript](http://shiffman.net/teaching/a2z/week1/#strings)
* [File I/0 with Node](http://shiffman.net/teaching/a2z/week1/#file)
* [Simple Text Analysis](http://shiffman.net/teaching/a2z/week1/#analysis)
* [Back to p5.js, processing text from a user](http://shiffman.net/teaching/a2z/week1/#p5analysis)

### Examples
* [Processing to p5](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/00_Processing_to_p5.js)
* [OOP in JS](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/01_objects_in_JS)
* [DOM manipulation in p5](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/02_DOM_p5)
* [Strings in JS](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/03_Strings)
* [File I/O in Node](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/04_fileinput)
* [Process user text in p5](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/05_p5_text)

### Assignment
* [Sign up for the class google group](https://groups.google.com/a/nyu.edu/forum/#!forum/a2z-group/)
* [Watch](https://www.youtube.com/watch?v=PGsQwAu3PzU) or [read](http://secretlifeofpronouns.com/book.php) The Secret Life of Pronouns.
* Develop a program that "writes" or "reads" (or both) text, i.e. generate your own text from a source text (or via some other generative method) or create your own method for analyzing the statistical properties (or, dare I say, meaning) of an input text.  You can use node to process a text file or you can get user input in a browser.  Feel free to play around with visual ideas for displaying text with p5.js.
* [Wiki page for submitting homework](https://github.com/shiffman/Programming-from-A-to-Z-F14/wiki/Week-1-Homework)


## Week 2 - Regular Expressions - Sep 12

### [Week 2 Notes](http://shiffman.net/teaching/a2z/regex)
* [Intro to Regular Expressions](http://shiffman.net/teaching/a2z/regex/#regex)
   * meta-characters
       * position
       * single character
       * quantifiers
       * character classes
* [Testing regex with egrep](http://shiffman.net/teaching/a2z/regex/#egrep)
* [Regex in JavaScript](#jsregex)
* [Splitting with Regex](#splitting)
* [Search and Replace](#searchreplace)

### Examples
* Plain JS
    * [Basic Regex: exec()](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/regex_helloworld1.js)
    * [Basic Regex: match()](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/regex_helloworld2.js)
    * [VowelCounter](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/vowelcounter.js)
    * [WordSplitterRegex](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/split.js)
    * [Simple replace](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/replace1.js)
    * [Replace back reference](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week2_regex/regex_node/replace2.js)
* P5 examples
    * [Find double words](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/doublewords)
    * [Double the vowels](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/voweldoubler)

### Resources
* [Chapter 1, Mastering Regular Expressions](http://safari.oreilly.com/0596002890/mastregex2-CHP-1)
* [Guide to regex in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [Eloquent JavaScript Regular Expressions](http://eloquentjavascript.net/09_regexp.html)
* [Play the regex crossword!](http://regexcrossword.com/) 
* [Another, older Java-based Regex game](http://www.javaregex.com/agame.html)


### Reading
* If you are looking for some inspiration about computational methodologies as it relates to writing, read about [Jackson Mac Low](http://en.wikipedia.org/wiki/Jackson_Mac_Low).  Mac Low was an American poet well-known for his use of chance operations and other algorithmic processes in his writing.  Following are two articles I would suggest:  [Science, Technology, and Poetry: Some Thoughts on Jackson Mac Low](http://research.amnh.org/~mordecai/papers/jml_fest.html) by [Mordecai-Mark Mac Low](http://research.amnh.org/~mordecai/index.html) and [Listen and Relate: Notes Towards a Reading of Jackson Mac Low](http://epc.buffalo.edu/authors/hartley/maclow/maclow.htm) by George Hartley.

### Assignment
*  Practice Regular Expressions!  If you are stuck for an idea, here are some suggestions:
    * Take your code from week 1, expand and rework it using Regular Expressions.
    * Taking inspiration from the [Pirate Translator](http://www.apple.com/downloads/dashboard/calculate_convert/piratetranslator.html), re-imagine a text using regex search and replace.
    * Create a program that performs [Mac Low's Diastic reading of a text](http://www.eskimo.com/~rstarr/poormfa/explaindiastic.html)
    * Write a regular expression that matches any e-mail address.
    * Take that regular expression and do a search and replace so that any e-mail address is made into a &#8220;mailto:&#8221; link.
    * Create an example that reads an HTML page and removes any markup and leaves only the raw content.

## Week 3 - Text Analysis - Sep 19
* Text concordance
* Keyword finding
* What our words say about us? 
    * [Secret Life of Pronouns](http://www.secretlifeofpronouns.com/)
* Bayesian Analysis (spam filtering)

## Week 4 - Text Generation - DATE TBA
* Markov Chains
   * [Animated explanation](http://setosa.io/blog/2014/07/26/markov-chains/) 
* Context Free Grammar

## Week 5 - Text Visualization - Oct 3
* word clouds
* text on curves
* canvas vs DOM

## Week 6 - Bonus Topics - Oct 10
* TBA

## Week 7 - Present Final Projects - Oct 17

## Resources
* [p5.js](http://p5js.org)
* [p5.js on GitHub](https://github.com/lmccart/p5.js)
* [p5.js CDN](http://cdnjs.com/libraries/p5.js)
* [Node](http://nodejs.org/)
* [Servi](https://github.com/antiboredom/servi.js)

## Learning / Intro
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)

## Reference
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak

## Tools
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [gist.github.com](http://gist.github.com)

## References
* Office of Creative Research
   * [Moveable Type](http://o-c-r.org/portfolio/moveable-type/)
   * [Shuffle](http://o-c-r.org/portfolio/shuffle/)
   * [Shakespeare Machine](http://o-c-r.org/portfolio/shakespeare-machine/)
* [ITP Course Generator](http://static.decontextualize.com/toys/next_semester) by Allison Parrish
* [Darius Kazemi](http://tinysubversions.com/)
* [Wordnik](https://www.wordnik.com/about), [Wordnik API](http://developer.wordnik.com/)
* [WTFEngine](https://github.com/soulwire/WTFEngine)
* [programming language design prototyping tool](https://github.com/nasser/pltjs) by Ramsey Nasser
* [Drawing with text](http://codepen.io/tholman/pen/qCnfB)
* [Ariel Malka](http://ariel.chronotext.org/)
* [Werdmerge](http://werdmerge.com/)
* [Visualizing Fiction's Structure](https://www.youtube.com/watch?v=f41U936WqPM), Lynn Cherny
* [Secretlife of Pronouns](http://secretlifeofpronouns.com/)
* [Gnoetry](http://www.beardofbees.com/gnoetry.html)
* [Jackson Mac Low](http://epc.buffalo.edu/authors/maclow/)
* [Grand Text Auto](http://grandtextauto.org/)
* [Nick Montfort](http://nickm.com/)
* [Wordnet](http://wordnet.princeton.edu/)
* [Wordcount](http://www.number27.org/wordcount)
* [Rita](http://rednoise.org/rita/)
* [Allison Parrish](http://www.decontextualize.com/)

## Requirements
* You are required to attend all class meetings and submit all weekly assignments and a final project.
* Grading (pass/fail) will be based on a combination of factors:
  * Attendance, participation in class discussion, and engagement in other students' projects (25%)
  * Quality of weekly assignments (50%) 
  * Final Project (25%)
