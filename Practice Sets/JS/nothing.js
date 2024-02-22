function toAdd() {
  const a = 40;
  const b = 60;
  console.log(a + b);
}
function toSub() {
  const a = 60;
  const b = 40;
  console.log(a - b);
}

function nothing() {
  this.add = toAdd();
  this.sub = toSub();
}

const obj = new nothing();
