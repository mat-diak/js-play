const Candy = require('./candy') 
 let totalPrice = 0;

class ShoppingBasket extends Candy {
  // constructor() {
  //   totalPrice = 0
  //  }
  getTotalPrice() {
    return totalPrice;  
  }
  
  addItem(candy) {
    totalPrice += candy.getPrice
  }
}
module.exports = ShoppingBasket;