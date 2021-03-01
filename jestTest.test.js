const sum = require('./jestTest');

const sumTest = () => {
  expect(sum(1, 2)).toBe(3);
};

const boolTest = () => {
  expect(true).toBe(true);
};

test('adds 1 + 2 to equal 3', sumTest);
test('random booleanTest', boolTest);
