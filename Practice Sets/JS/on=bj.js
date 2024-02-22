const car1 = {
  brand: "Mercedes",
  model: "EQS",
  type: "SUV",
  horsePower: 2000,
  seats: 8,
};

const car2 = {
  brand: "BMW",
  model: "X4",
  type: "sedan",
  horsePower: 2200,
  seats: 4,
};


compare();

function compare() {
  if (car1.horsePower > car2.horsePower) {
    console.log(Object.values(car1));
  } else {
    console.log(Object.values(car2));
  }
}


