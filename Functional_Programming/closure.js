/*
    Topics: 
    -------
        A. Closure's definition
        B. Explanation of closure's definition with code example.
        C. Immediately Invoked Function Expressions (IIFEs). closure & loop issue.
        D. Simple closure and learn console.dir() operation.



   Notes:
        * Closure is when a function is able to remember and access  
          it's lexical scope, Even when that function executing outside it's lexical scope.

          ---->> Able to remember and access it's lexical scope.
          ---->> Function executing outside it's lexical scope.


        * Jodi kono scope a baire theke data ase take closure bole.
       
        * The name "console.dir" is derived from its primary function, which is to 
          display the directory or structure of an object.
        * console.log is used for basic text-based logging, while console.dir is  
          used for exploring and inspecting the structure of JavaScript objects in a 
          more detailed and interactive manner. 

      Blogs Notes:
      ---------------------
        * Closures are commonly used to create private variables and encapsulation 
          in JavaScript.
        * This allows you to achieve information hiding and avoid global namespace 
          pollution.
        * Closures are often used in scenarios such as event handlers, callbacks, 
          and maintaining state in functional programming. 
       
*/

//--------------------------------------------------------------------------------->>

// Able to remember and access it's lexical scope.

function test() {
  var testVar = `I'm from lexical scope and closure`;

  function innerFunc() {
    console.log(testVar);
  }
  innerFunc();
}

//--------------------------------------------------------------------------------->>

// Function executing outside it's lexical scope.

function test1() {
  var testVar1 = `I'm from lexical scope and closure`;

  return function () {
    console.log(testVar1);
  };
}
const result1 = test1();
console.log(result1()); // executing outside it's lexical scope

//--------------------------------------------------------------------------------->>

// Immediately Invoked Function Expressions (IIFEs). closure & loop issue.

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

// Another approach: IIFEs
for (let i = 1; i <= 5; i++) {
  (function X(n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}

//--------------------------------------------------------------------------------->>

// Simple look of closure.

let a = "Global scope";

function func() {
  let b = "Jobayer Ahmed";

  return function () {
    console.log(b);
  };
}

const result = func();
console.dir(result()); // Run this code in chrome dev tool for better understand.
