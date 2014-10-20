// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Show issues around a callback in a loop
// This happens in a lot of the examples where
// multiple API calls are made
// or if multiple callback functions are assigned to
// an array of DOM elements

// Some more ways of doing this are here:
// https://gist.github.com/shiffman/7b96d9951bb3865e7d38

function setup() {
  for (var i = 0; i < 10; i++) {
    // This will work by passing in a variable
    // to a separate function
    countit(i);

    // This will not work b/c the loop will
    // finish and i will be at 10 by the time the 
    // anonymous function is called
    // setTimeout(function() {
    //   console.log(i);
    // }, i * 1000);
  }

  function countit(num) {

    // This is a closure where
    // the function declared here will retain
    // num even after this has been completed
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
    setTimeout(function() {
      console.log(s + num);
    }, num * 1000);
  }

}

