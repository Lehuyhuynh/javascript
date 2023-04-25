const countsfrom  = require("./countsfrom");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "The, quick brown fox jumps over the lazy dog.";
  const sortedArr = countsfrom(arr);
  expect(sortedArr).toEqual(9);
});
