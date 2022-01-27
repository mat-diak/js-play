const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('gets total price', () => {
    const basket = new ShoppingBasket()
    expect(basket.getTotalPrice()).toBe(0)
  });
  it('adds item', () => {
    const basket = new ShoppingBasket();
    const candy = { getPrice: () => 3.99 };
    basket.addItem(candy);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toBe(7.98);
  });
});