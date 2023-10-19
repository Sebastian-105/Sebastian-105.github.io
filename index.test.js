const { mooncakeSays } = require('./');

test('It worked', () => {
  expect(mooncakeSays('woooahhh!')).toBe('(o.o) woooahhh!');
});

test('It worked', () => {
  expect(mooncakeSays()).toBe('(o.o) chookity?');
});