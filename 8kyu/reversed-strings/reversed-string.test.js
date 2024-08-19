const reversedString = require('./reversed-string.js');

test('reverses a string', () => {
  expect(reversedString('hello')).toBe('olleh');
  expect(reversedString('world')).toBe('dlrow');
  expect(reversedString('')).toBe('');
  expect(reversedString('a')).toBe('a');
});

test('string should not be the same after reversing', () => {
  expect(reversedString('hello')).not.toBe('hello');
  expect(reversedString('world')).not.toBe('world');
});
