/*
    Topics:
    -------
        A. Simple AJAX
        B. AJAX with callback function.(Bad & Good practice)
        C. Make common getFunction with the help of "Promise".









*/

//-------------------------------------------------------------------------->>

// A. Simple AJAX

function loadres() {
  const xtr = new XMLHttpRequest();

  xtr.onload = () => {
    const result = xtr.responseText;
    // result.forEach((r) => console.log(r));
    const parsed = JSON.parse(result);
    const response = parsed.forEach((r) => r.username);
  };
  xtr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xtr.send();
}

// loadres();

//-------------------------------------------------------------------------->>

// B. AJAX with callback function (Bad practice)

const xHttpReq = new XMLHttpRequest();
xHttpReq.open("get", "https://jsonplaceholder.typicode.com/users");

xHttpReq.onreadystatechange = function (e) {
  if (xHttpReq.readyState === 4 && xHttpReq.status === 200) {
    const response = JSON.parse(xHttpReq.response);
    response.forEach((res) => console.log(res.username));
  }
};

// xHttpReq.send();

//-------------------------------------------------------------------------->>

// B. AJAX with callback function (Good practice)

// Common callback function for all get request.
const getRequest = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      callback(null, response);
    }
  };
  xhr.send();
};

// Get users.
getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // res.forEach((r) => console.log(r.username));
  }
});

// Get posts.
getRequest("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // res.forEach((r) => console.log(r.title));
  }
});

// Get todo.
getRequest(`https://jsonplaceholder.typicode.com/todos`, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
  }
});

//-------------------------------------------------------------------------->>

// Always callback isn't asynchronous in JS.
const arr = [1, 2, 3, 4, 5];

// Normal mapping
const qbArr = arr.map((v) => v * v * v); // Output: Sync result

// Async mapping
function asyncMap(arr, callback) {
  return arr.map((v) => {
    setTimeout(() => callback(v), 2000);
  });
}

asyncMap(arr, (v) => {
  // console.log(v);
});

//-------------------------------------------------------------------------->>

// C. Make common getFunction with the help of "Promise".

const Base_URL = "https://jsonplaceholder.typicode.com";

function getFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = function (e) {
      xhr.readyState === 4 && xhr.status === 200
        ? resolve(xhr.response)
        : reject(new Error("Error occurred"));
    };
    xhr.send();
  });
}

// Get single user
getFunction(`${Base_URL}/users/1`)
  .then((res) => {
    let data = JSON.parse(res);
    // console.log(data.name);
  })
  .catch((e) => {
    console.log(e.message);
  });

// Get All users
getFunction(`${Base_URL}/users`)
  .then((res) => {
    let data = JSON.parse(res);
    // console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  });
