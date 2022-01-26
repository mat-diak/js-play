class UserBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }
} 

module.exports = UserBase;