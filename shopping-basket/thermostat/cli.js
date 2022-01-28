const Thermostat = require("./thermostat");
const readline = require("readline");

const thermostat = new Thermostat();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const processAnswer = (answer) => {
  switch(answer) {
    case 'up':
      thermostat.up()
      break;
    case 'down':
      thermostat.down()
      break;
    case 'exit':
      rl.close()
      break;
    case 'psm on':
      thermostat.setPowerSavingMode(true);
      console.log('PSM on- max temp is 25')
      break;
    case 'psm off':
      thermostat.setPowerSavingMode(false);
      console.log('PSM on- max temp is 32')
      break;
    default: 
      console.log('Incorrect input');
  }
  console.log(`The temperature is ${thermostat.getTemperature()}`)
  rl.question('Commmand > ', processAnswer)
};

rl.question('Commmand > ', processAnswer)

rl.on('close', () => {
  process.exit()
})

// rl.question('Command > ', () => {
  
//   rl.on('line', (blah) => {
//     if (blah === 'up') {
//       thermostat.up()
//     } else if (blah === 'down'){
//       thermostat.down()
//     }
//     console.log(`Current temperature: ${thermostat.getTemperature()}`)
//     rl.setPrompt('Command > ')
//     rl.prompt()
//   })
// })
