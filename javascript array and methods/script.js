//for in = object
let a = {
  name: "bibek",
  age: 25,
};
for (let key in a) {
  console.log("key=", key);
  console.log("value=", a[key]);
}
