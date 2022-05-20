const { TestWatcher } = require('jest');
const sum = require('../sum.js');

test('Sum two values', () => {
    expect(sum(1,2)).toBe(3);
});