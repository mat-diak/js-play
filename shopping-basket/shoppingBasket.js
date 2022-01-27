const Candy = require('./candy') 

class ShoppingBasket {
  
  constructor() {
    this.totalPrice = 0
   }
  
   getTotalPrice() {
    return this.totalPrice;  
  }
  
  addItem(candy) {
    this.totalPrice += candy.getPrice()
  }
}

module.exports = ShoppingBasket;