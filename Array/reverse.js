// Array reverse:
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Approach- 1:-------------------------------<< Using reverse() method
arr.reverse(); //  [  8, 7, 6, 5, 4, 3, 2, 1 ]

// ------------------------------------------------------------------------------>>

// Approach- 2: -------------------------------<< Custom way
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
  const temp = array[i]; // 1, 2, 3
  array[i] = array[array.length - 1 - i]; // 7, 6, 5
  array[array.length - 1 - i] = temp;
}

console.log(array); // Outputs: [7, 6, 5, 4, 3, 2, 1]
/*
    রিভার্স করার ধাপসমূহ:
        ১. অ্যারে কে অর্ধেক লেন্থে করে নিতে হবে। কারণ, রিভার্স করলে শেষেরটা  আসবে প্রথমে 
           আর প্রথমেরটা যাবে শেষে । এরের মাঝখান পর্যন্ত এই কাজ চলবে। 
        ২. 
*/
// ------------------------------------------------------------------------------>>

// Fun with array reverse.
// Yes, I have done the fun task with array reverse.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let reversed = fruits.reverse();

for (let i = 0; i < reversed.length; i++) {
  let elements = reversed[i];
  reversed[i] = elements.split("").reverse().join("");
}
reversed; // [ 'ognaM', 'elppA', 'egnarO', 'ananaB' ]
