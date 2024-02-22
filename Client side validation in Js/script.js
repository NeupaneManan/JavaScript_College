let form = document.getElementById("valid-form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let re_pass = document.getElementById("re-password");

function errormsg(input, msg) {
  let formControl = input.parentElement; //form control vanne variable ma input ko parent div ko class laii select gareko
  formControl.className = "input-fields error";
  console.log(formControl);
  let small = formControl.querySelector("small"); // hami le small vanne tag laii select garera small vanne variable ma haleko
  small.innerText = msg; // aba small vanne tag ko inner html (i.e. content) ma error auda ko message haleko
}
errormsg();

function successmsg(input) {
  let formControl = input.parentElement; // form control vanne variable ma input ko parent div ko class laii select gareko
  formControl.className = "input-fields sucess"; // formcontrol ma select vako div ko class ko name change gareko
}

function emailCheck(input){
    const chk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if()
}