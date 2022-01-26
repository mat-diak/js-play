const Candy = require('./candy')

describe('candy', () => {

  it('gets price', () => {
    const candy = new Candy('Mars', 4.99)
    expect(candy.getPrice()).toBe(4.99)
  });
  it('gets name', () => {
    const candy = new Candy('Mars', 4.99)
    expect(candy.getName()).toBe('Mars')
  });
 
});