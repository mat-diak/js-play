const add = require('./add');

describe('add', () => {
  xit('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4)
  });

  xit('adds 0 and 5', () => {
    expect(add(0, 5)).toBe(5)
  } );
});