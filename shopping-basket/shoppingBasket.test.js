const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('gets total price', () => {
    const basket = new ShoppingBasket()
    expect(basket.getTotalPrice()).toBe(0)
  });
  it('adds item', () => {
    const basket = new ShoppingBasket()
    const candy = new Candy('Skittle', 3.99)
    basket.addItem(candy)
    expect(basket.getTotalPrice()).toBe(3.99)
  });
  
});