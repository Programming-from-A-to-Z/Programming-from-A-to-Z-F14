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
* [File I/O in p5](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/05_fileinput_p5)
* [Process user text in p5](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week1/06_p5_text)

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
    * [Regex Basics](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/01_regexbasics)
    * [Find double words](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/02_doublewords)
    * [Double the vowels](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/03_voweldoubler)
    * [Test a regex](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/04_regex_tester)
    * [Find links](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/05_linkfinder)

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
    * Create a program that performs Mac Low's Diastic reading of a text. [Diastic Explanation](http://intercapillaryspace.blogspot.com/2012/03/mac-lows-diastic-process-in-gale.html), [eDiastic demo](http://www.eddeaddad.net/eDiastic/l)
    * Write a regular expression that matches any e-mail address.
    * Take that regular expression and do a search and replace so that any e-mail address is made into a &#8220;mailto:&#8221; link.
    * Create an example that reads an HTML page and removes any markup and leaves only the raw content.
    * Write a regular expression that matches any e-mail address.
    * Take that regular expression and do a search and replace so that any e-mail address is made into a &#8220;mailto:&#8221; link.
    * Create an example that reads an HTML page and removes any markup and leaves only the raw content.
    * Adapt the [regex tester](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week2_regex/regex_p5/regex_tester) to bea  search/replace tester.
    * Create a regex that matches only code comments in code.
* Don't forgot to document your work online, upload to dropbox, and post to the [homework wiki](https://github.com/shiffman/Programming-from-A-to-Z-F14/wiki/Week-2-Homework).
   
## Week 3 - Text Analysis - Sep 19
### [Week 3 Notes](http://shiffman.net/teaching/a2z/analysis)
* [Associative Arrays in JavaScript?](http://shiffman.net/teaching/a2z/analysis#dictionary)
* [Text Concordance](http://shiffman.net/teaching/a2z/analysis#concordance)
* [Keyword finding: TF-IDF](http://shiffman.net/teaching/a2z/analysis#tfidf)
* [Text Classification: Naive Bayes](http://shiffman.net/teaching/a2z/analysis#bayes)

### Examples
* [Text Concordance](http://shiffman.net/teaching/a2z/analysis/01_concordance/), [Source code](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/01_concordance)
* [Keyword finding: TF-IDF](http://shiffman.net/teaching/a2z/analysis/02_tf-idf/), [Source code](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/02_tf-idf)
* [Text Classification: Naive Bayes](http://shiffman.net/teaching/a2z/analysis/05_naive_bayes_classifier/), [Source Code](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/05_naive_bayes_classifier)
* [Rita Library Basics](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/03_rita_basics)
* [Parts of Speech Concordance](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/04_parts_of_speech_concordance)
* [Sample Datasets](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week3_analysis/sample_datasets)

### Resources
* [What our words say about us.](http://secretlifeofpronouns.com/)
* [TF-IDF Single Page Tutorial](http://www.tfidf.com/)
* [Paul Graham's A Plan for Spam](http://www.paulgraham.com/spam.html) and [Better Bayesian Filtering](http://www.paulgraham.com/better.html)
* [Introduction to Bayesian Filtering](http://www.bcc.bilkent.edu.tr/BayesianFiltering.pdf)
* [Monty Hall and Bayes](http://sciencehouse.wordpress.com/2009/04/19/monty-hall-and-bayes/)
* [An Intuitive Explanation of Bayes' Theorem by Eliezer S. Yudkowsky](http://yudkowsky.net/rational/bayes)
* [The RiTa Library](http://rednoise.org/rita/)
* [Luke Dubois' Missed Connections](http://lukedubois.com/)
* [Nicholas Felton's 2013 Annual Report](http://feltron.com/FAR13.html), [NY Times Article](http://bits.blogs.nytimes.com/2014/08/19/a-life-in-data-nicholas-feltons-self-surveillance/?_php=true&_type=blogs&_r=0)

### Assignment
*  Experiment with text analysis.  Here are some ideas if you are feeling stuck.
  * Visualize the results of a concordance using canvas (or some other means).
  * Expand the information the concordance holds so that it keeps track of word positions (i.e. not only how many times do the words appear in the source text, but where do they appear each time.)
  * Implement some of the ideas specific to spam filtering to the bayesian classification exmple.
  * In James W. Pennebaker's book [The Secret Life of Pronouns](http://secretlifeofpronouns.com/), Pennebaker describes his research into how the frequency of words that have little to no meaning on their own (I, you, they, a, an, the, etc.) are a window into the emotional state or personality of an author or speaker.  For example, heavy use of the pronoun “I” is an indicator of “depression, stress or insecurity”.  Create a page sketch that analyzes the use of pronouns.  For more, visit [analyzewords.com](http://www.analyzewords.com/">http://www.analyzewords.com).
  * Use the ideas to find similarities between people. For example, if you look at all the e-mails on the ITP student list, can you determine who is similar? Consider using properties in addition to word count, such as time of e-mails, length of e-mails, etc.

## No class meeting Friday, Sept 26

## Week 4 - Text Generation - Oct 3
### [Week 4 Notes](http://shiffman.net/teaching/a2z/generate)
* [N-Grams and Markov Chains](http://shiffman.net/teaching/a2z/generate#ngrams)
* [Grammars](http://shiffman.net/teaching/a2z/generate#grammar)
* Wordnik
* TwitterBot

### Examples
* [Markov chains](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week4_generate/01_markov)
* [Context-free Grammars](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week4_generate/02_cfg)
* [Wordnik API](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week4_generate/03_wordnik/01_wordnik)
* [TwitterBot](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week4_generate/04_twitter_bot/bot.js)

### Resources
* [Animated Markov Chain explanation](http://setosa.io/blog/2014/07/26/markov-chains/) 
* [N-Grams and Markov Chains by Allison Parrish](http://www.decontextualize.com/teaching/rwet/n-grams-and-markov-chains/)
* [Context-Free Grammars by Allison Parrish](http://www.decontextualize.com/teaching/rwet/recursion-and-context-free-grammars/)
* [N-Grams and Markov Chains by Daniel Howe](http://www.rednoise.org/pdal/index.php?n=Main.N-Grams)
* [Context-Free Grammars by Daniel Howe](http://www.rednoise.org/pdal/index.php?n=Main.Grammars)
* [Google N-Gram Viewer](https://books.google.com/ngrams), [google blog post about n-grams](http://googleresearch.blogspot.com/2006/08/all-our-n-gram-are-belong-to-you.html)
* [Markov Models of Natural Language](http://www.cs.princeton.edu/courses/archive/spr05/cos126/assignments/markov.html)
* [Three Models for the Description of Language (Chomsky)](http://chomsky.info/articles/195609--.pdf)

### Assignment
* Generate text procedurally.
* Post a link about your work to: [week 4 homework wiki](https://github.com/shiffman/Programming-from-A-to-Z-F14/wiki/Week-4-Homework)
* Some ideas:
    * Create page that generates its content by feeding an existing text into the Markov chain algorithm.  What effect does the value of n (the “order” of the n-gram) have on the result?  [Allison Parish's ITP Course generator](http://static.decontextualize.com/toys/next_semester) is an excellent example.
    * Visualize N-gram frequencies.  See [WebTrigrams by Chris Harrison](http://www.chrisharrison.net/index.php/Visualizations/WebTrigrams) for an example.
    * What happens if you mash-up two texts? For example, feed Shakespeare plays and ITP physical computing blog post content into the generator.  Can you modify the MarkovGenerator object to weight the input text (i.e. make shakespeare N-grams have higher probabilities?)  [The Gnoetry Project](http://www.beardofbees.com/gnoetry.html) is a useful reference.  
    * Rework any of the example programs to use something other than text (or, at least, text that represents language) as its basic unit. For example: musical notes, songs in playlists, pixels in an image, etc.
    * Invent your own grammar. Consider using one that generates something other English sentences: music, images, code, etc.
    * Build a grammar that pulls its terminal words from [Wordnik](https://www.wordnik.com/).
    * Build a grammar based on a source text [as demonstrated here](https://github.com/shiffman/Programming-from-A-to-Z-F14/blob/master/week4_generate/02_cfg/04_grammar_maker/grammarmaker.js).  

## Week 5 - Text Visualization - Oct 10
### [Week 5 Notes](http://shiffman.net/teaching/a2z/visualization)
* [Drawing Text with Canvas](http://shiffman.net/teaching/a2z/visualization/#canvas)
* [Drawing Text with DOM Elements](http://shiffman.net/teaching/a2z/visualization/#dom)
* [Classic Text Visualization Techniques](http://shiffman.net/teaching/a2z/visualization/#classic)
   * word clouds
   * treemaps
   * network diagrams
* Pulling text and metadata from APIs

### Examples
* [Text display basics](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/00_basics)
* [More with canvas](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/01_canvas_drawingtext)
* [More with DOM](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/02_DOM_drawingtext)
* [Boxfitting](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/04_boxfitting)
* [Treemap](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/05_treemap)
* [Network diagram](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/06_network_diagram)
* [Physics](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/07_physics)
* [APIs](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/08_APIs/)

### Resources
* [Stefanie Posavec](http://www.stefanieposavec.co.uk/-everything-in-between/)
* [Textarc by Bradford Paley](http://www.textarc.org/)
* [Ariel Malka](http://chronotext.org/)
* [OpenBible](http://www.openbible.info/blog/2011/10/applying-sentiment-analysis-to-the-bible/)
* [State of the Union, NY Times](http://www.nytimes.com/ref/washington/20070123_STATEOFUNION.html)
* [On the Origin of Species: The Preservation of Favoured Traces, Ben Fry](http://fathom.info/traces)
* [Office of Creative Research](http://o-c-r.org/work/)
* [Jeff Clark](http://neoformix.com/2013/NovelViews.html)
* Jonathan Corum, [word incidence](http://style.org/lyrics/)
* Lynn Cherny, [talk](https://www.youtube.com/watch?v=f41U936WqPM) [pinterest](http://www.pinterest.com/arnicas/textvis/)
* [Matthew Jockers](http://www.matthewjockers.net/)
* [wordle algorithm](http://static.mrfeinberg.com/bv_ch03.pdf)
* [SoSoLimited Reconstitution 2008](http://www.sosolimited.com/work/reconstitution-2008/)
* [Rob Seward Word Association](http://robseward.com/blog/2009/02/23/word-association-apps/)

### Assignment
* Create a final project proposal.  [Add a link to the wiki](https://github.com/shiffman/Programming-from-A-to-Z-F14/wiki/Final-Project-Proposal).  

## Week 6 - APIs - Oct 17
* Pulling data from APIs
    * [Some notes from creativeJS](https://github.com/lmccart/itp-creative-js/wiki/Week-4)
    * API examples:
        * [Instagram p5.js example](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week6_apis/01_instagram), [Instagram API docs](http://instagram.com/developer/)
        * [NY Times p5.js examples](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week6_apis/03_nytimes), [NY Times API docs](http://developer.nytimes.com/docs)
        * [Wikipedia p5.js examples](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week6_apis/04_wikipedia), [Wikipedia API docs](http://www.mediawiki.org/wiki/API:Main_page)
* Making your own API
    * [Server side programming with Servi](https://github.com/antiboredom/servi.js/wiki)
    * [Code examples](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week6_apis/05_servi_makeyourownAPI)
    * [Nodemon](https://github.com/remy/nodemon)
    * Deploying your app: [notes from Shawn's Network Media using Digital Ocean](http://itp.nyu.edu/~sve204/commlabnetworkedmedia_fall2014/week1.html)
* Combining the two!
    * [OAuth](http://en.wikipedia.org/wiki/OAuth)
    * [Twitter API docs](https://dev.twitter.com/overview/documentation)
    * [Twit Node module](https://github.com/ttezel/twit)
    * [Example using servi.sj and p5 to search and post tweets](https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week6_apis/06_twitter_horrors_of_oauth)

### Assignment
* Prepare final project and documentation [as described here](https://github.com/shiffman/Programming-from-A-to-Z-F14/wiki/Final-Project).  Plan on 5 minutes (with 1-2 minutes of questions) for presenting.

## Week 7 - Present Final Projects - Oct 30 -- 12:30 - 3:00 pm
* ***NOTE THE NEW DATE FOR THIS FINAL CLASS Oct 30 -- 12:30 - 3:00 pm Room TBA***

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
