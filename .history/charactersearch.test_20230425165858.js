const  charactersearch = require("./charactersearch");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "The, quick brown fox jumps over the lazy dog.";
  const sortedArr = charactersearch(arr);
  expect(sortedArr).toEqual(9);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "i have 3 kids";
  const sortedArr = charactersearch(arr);
  expect(sortedArr).toEqual(4);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "The, quick brown  fox jumps over the lazy dog.";
  const sortedArr = charactersearch(arr);
  expect(sortedArr).toEqual(10);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "The, quick brown fox jumps over the lazy dog.      ";
  const sortedArr = charactersearch(arr);
  expect(sortedArr).toEqual(15);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "          The, quick brown fox jumps over the lazy dog.";
  const sortedArr = countsfrom(arr);
  expect(sortedArr).toEqual(19);
});
