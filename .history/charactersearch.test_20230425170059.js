const  charactersearch = require("./charactersearch");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const m = ["hello", "charactersearch"];
  const sortedm = charactersearch(m);
  expect(sortedm).toEqual(9);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const m = "i have 3 kids";
  const sortedm = charactersearch(m);
  expect(sortedm).toEqual(4);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const m = "The, quick brown  fox jumps over the lazy dog.";
  const sortedm = charactersearch(m);
  expect(sortedm).toEqual(10);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const m = "The, quick brown fox jumps over the lazy dog.      ";
  const sortedm = charactersearch(m);
  expect(sortedm).toEqual(15);
});

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const m = "          The, quick brown fox jumps over the lazy dog.";
  const sortedm = charactersearch(m);
  expect(sortedm).toEqual(19);
});
