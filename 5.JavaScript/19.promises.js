/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise2 = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise2
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));

/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData2() {
  let users = ["fady"];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData2());

getData2().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // myPromise.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise);
  console.log(await myPromise3.catch((err) => err));
  console.log("After Promise");
}

readData();

/*
  Async & Await With Try, Catch, Finally
*/

const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();

// assignment
let api = `[{
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }]`;

let assignPromise = new Promise((resolve, reject) => {
  api = JSON.parse(api);
  api.length = 5;
  console.log(api);
  resolve(api);
}).then((api) => {
  for (obj of api) {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>Article title number ${obj["description"].split(" ").pop()}</h3>
    <p>${obj["description"]}</p>`;
    document.body.appendChild(div);
  }
});
