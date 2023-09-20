/*
    Topics:
    -------
        A. What is promise?
        B. Simple promise.
        C. Better promise exploration.
        D. Simple fetch API call
        E. Delay function (custom)
        F. Instant "resolve" and "reject" Promise.
        G. Promise.all()


    Notes:
    ------
        A. What is promise?
        --------------------

*/

//-------------------------------------------------------------------------->>

const Base_url = "https://jsonplaceholder.typicode.com";

// B. Simple promise____________
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Default value");
});
p1.then((value) => {
  //   console.log(value); // Output
}).catch((error) => {
  console.log(error);
});

//-------------------------------------------------------------------------->>

// C. Better promise exploration
function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isPassed ? resolve("You got the Iphone") : reject(new Error("You are failed"));
    }, 2000);
  });
}
getIphone(true)
  .then((result) => {
    // console.log(result);
  })
  .catch((e) => {
    console.log(e.message);
  });

//-------------------------------------------------------------------------->>

// D. Simple fetch API call and get single user
const response = fetch(`${Base_url}/users/3`)
  .then((res) => {
    res.json().then((data) => {
      //   console.log(data.email); // Get all data of a user.
    });
  })
  .catch((e) => {
    console.log(e.message);
  });

//-------------------------------------------------------------------------->>

// E. Delay function (custom)

const delay = (sec) =>
  new Promise((resolve) => {
    setTimeout(resolve, sec);
  });

// delay(3000).then(() => console.log("Print after 3 seconds"));
// delay(2000).then(() => console.log("Print after 2 seconds"));
// delay(5000).then(() => console.log("Print after 5 seconds"));
// delay(4000).then(() => console.log("Print after 4 seconds"));
// delay(1000).then(() => console.log("Print after 1 seconds"));

//-------------------------------------------------------------------------->>

//  F. Instant "resolve" and "reject" Promise.
// Resolved (instant)
const resolved = Promise.resolve();
resolved.then(() => "Data resolved");

// Rejected (instant)
const rejected = Promise.reject("Data Rejected");
rejected.then(() => console.log("'then method doesn't work")).catch((value) => value);

//-------------------------------------------------------------------------->>

// G.Promise.all()________________
// Simple way_________________(Synchronous way)

let pm1 = Promise.resolve("One");
let pm2 = Promise.resolve("Two");
let pm3 = Promise.resolve("Three");

const allPromises = [pm1, pm2, pm3];
Promise.all(allPromises).then((arr) => {
  // console.log(arr);
});

//--------------------------------<

// Simple way______________(Asynchronous way)

let promise1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "Promise_One");
});
let promise2 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "Promise_Two");
});
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Promise_Three");
});

const promiseAll = [promise1, promise2, promise3];
Promise.all(promiseAll).then((arr) => arr);

//-------------------------------------------------------------------------->>
