class Thermostat {
  constructor() {
    this.temperature = 20;
    this.mode = true;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'low'
    } else if (this.temperature >= 18  && this.temperature <= 25) {
      return 'medium'
    } else {
      return 'high'
    }
  }

  resetTemperature() {
    this.temperature = 20
  }

  setPowerSavingMode(value) {
    this.mode = value
    if (this.temperature > 25) {
      this.temperature = 25
    }
  }

  down() {
    if (this.temperature > 10) {
       this.temperature -= 1;
    }
  }

  up() {
    if (this.mode === true && this.temperature < 25) {
      this.temperature += 1;
    } else if(this.mode === false && this.temperature < 32) {
      this.temperature += 1
    }
  }

  getTemperature() {
    return this.temperature;
  }
}

module.exports = Thermostat;
