const find_longest_word= require("./find_longest_word");

test('Sorts an array of positive numbers in ascending order', () => {
  const str = ('Write a program ');
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual("program");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("");
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([-3]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([4]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});