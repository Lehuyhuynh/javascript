const find_longest_word= require("./find_longest_word");

test('Sorts an array of positive numbers in ascending order', () => {
  const str = ('');
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([3]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([-3]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = [3,5,4,5,0];
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([4]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = [5, -2, 8, 1, -6];
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = [5, 2, -8, 1, 6];
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});