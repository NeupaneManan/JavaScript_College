// // 1. trim
// // 2. charAT
// // 3. slice
// // 4. forEach

// // let myname="sushant"
// let myname="   sushant    "
// console.log(myname);
// console.log(myname.trim());

// let str= "Hello World";
// console.log(str.charAt(0));
// console.log(str.slice(1));
// console.log(str.slice(1,2));

// let sum1=0;
// const number = [1,2,3,4,5];
// number.forEach(sum);
// console.log(sum1);
// function sum(n){
//     return (sum1 +=n);
// }

function errorMsg(input, msg) {
  const form_control = input.parentElement; //get the form-group element
  console.log(form_control);
  form_control.className = "form-control error";
  const small = form_control.querySelector("small");
  //    console.log(small);
  small.innerText = msg;
}
