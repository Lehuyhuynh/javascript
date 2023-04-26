const arrange = require("./arrange");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});

