// membuat array 1
let food = [];
food = ["pizza", "burger", "fries"];

let animals = ["cat", "dog"];
// console.log(typeof animals);

let arr1 = ["kelinci", 4, false, [1, 2, 3]];
// console.log(arr1[3][2]);

// let bulan1 = "januari";
// let bulan2 = "februari";

let months = ["januari", "februari", "maret", "april"];

for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
}

for (let month of months) {
//   console.log(month);
}

// splice
const veggies = ["Spinach", "Carrot", "Potato", "Cabbage", "Broccoli"];
// menghapus 2 elemen di index 0
veggies.splice(0, 2);
// console.log("veggies after splice", veggies);

// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// Mengambil elemen index 1 sampai index 2
const citrus = fruits.slice(1, 3);
console.log(citrus);
