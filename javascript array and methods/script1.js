//iteration inside array
let str = "namuna";
for (let val of str) {
  console.log(val);
}

let sum = 0;
const num = [2, 3, 4];
for (let val of num) {
  sum += val;
}
console.log("value=", sum);

//for each loop value index array
const student = ["ram", "shyam"];
student.forEach(myFunction);
function myFunction(value, index, array) {
  console.log(index + ":" + value);
}

const a = ["manan", "priyanshu"];
a.forEach((value) => {
  console.log(value);
});

const cars = ["BMW", "Ford", "Land Rover"];
cars[0] = "Mercedes";
alert(cars.toString());
console.log(cars, length - 1);

