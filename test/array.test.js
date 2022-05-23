const arr = require('../array.js');
const pessoa = require('../object.js');

test('Like an array', () => {
    const data = [1,2,3];
    expect(arr).toEqual(data);
});

test('Not like an array', () => {
    const data = ['leandro']
    expect(pessoa).not.toBe(data);
});