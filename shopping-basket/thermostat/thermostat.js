class Thermostat {
  constructor() {
    this.temperature = 20;
    this.mode = true
  };

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1
    }; 
  };
  
  up() {
    this.temperature += 1
  };

  getTemperature() {
    return this.temperature
  };
};

const t = new Thermostat()
// t.down()
// t.down()
// t.down()
// console.log(t) // 17
// t.down()
// t.down()
// t.down()
// t.down()
// console.log(t) // 12
// t.down()
// t.down()
// console.log(t) //10
// t.down()
// t.down()
// t.down()
// console.log(t) //10

module.exports = Thermostat;
