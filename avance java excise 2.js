//Exercise 1
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

alert(filtered); 

alert(arr);

// Exercise 2

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

alert( names );
// // Exercise 3

let John = { name: "John", age: 25 };
let Pete = { name: "Pete", age: 30 };
let Mary = { name: "Mary", age: 29 };

let users1 = [John, Pete, Mary];

function getAverageAge(users1) {
    return users1.reduce((a, user) => a + user.age, 0) / users1.length
};

alert( getAverageAge(users1));  