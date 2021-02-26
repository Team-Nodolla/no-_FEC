const sum = require('./jestTest');

const sumTest = () => {
  expect(sum(1, 2)).toBe(3);
};

test('adds 1 + 2 to equal 3', sumTest);
