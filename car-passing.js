const carPassing = function (cars, speed){
  let newCar = {time: Date.now(), speed};
  cars.push(newCar);
  return cars;
}

console.log(carPassing([
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
], 38));