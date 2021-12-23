"use strict";

let Airplane = {
  isFlying: false,
  takeOff: () => {
    Airplane.isFlying = true;
  },
  land: () => {
    Airplane.isFlying = false;
  },
};

console.log(Airplane.isFlying);
Airplane.takeOff();
console.log(Airplane.isFlying);
Airplane.land();
console.log(Airplane.isFlying);
