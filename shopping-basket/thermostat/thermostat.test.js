const Thermostat = require('./thermostat')


describe('Thermostat', () => {
  
  // The Thermostat starts with an initial temperature of 20 degrees
  it('has a default temperature of 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  
  // You can increase the temperature with an up method
  it('increases temprature by 1', () => {
    const thermostat = new Thermostat();
    // increase temprature
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21)
  })
  
  // You can decrease the temperature with a down method
  it('decreases temp by 1', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19)
  });

  // The minimum possible temperature is 10 degrees
  it('does not go below 10', () => {
    const thermostat = new Thermostat()
    thermostat.temperature = 11
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(10)
  })

  // The Power saving mode is on by default but it can also be turned off
  it('has power saving mode by default', () => {
    const thermostat = new Thermostat()
    expect(thermostat.mode).toEqual(true)
  });
});

// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// You can reset the temperature to 20 with a reset method
// You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.