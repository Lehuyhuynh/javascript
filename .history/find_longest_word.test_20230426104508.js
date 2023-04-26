const find_longest_word= require("./find_longest_word");

test('Sorts an array of positive numbers in ascending order', () => {
  const str = ('Write a program ');
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual("program");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("that takes a list of strings as ");
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual("strings");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("input and returns");
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual("returns");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str =("the longest word in the list.") ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ;
  const sortedArr = find_longest_word(str);
  expect(sortedArr).toEqual([5]);
});