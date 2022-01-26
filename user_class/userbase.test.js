const UserBase = require('./userbase')
const User = require('./user')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

describe('userbase class', () => {
  it('is constructed with users', () => {
    const userBase = new UserBase(users);
    expect(userBase.users).toEqual(users);
  });
  
  it('counts users', () => {
    const userBase = new UserBase(users);
    expect(userBase.count()).toBe(3);
  });


})
