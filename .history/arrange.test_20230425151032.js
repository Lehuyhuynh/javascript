const arrange = require("./arrange");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});

test("for 1 string '34' of length 1", () => {
  expect(arrange([9,3,6,1])).toBe([1,3,6,9]);
});
test("for 1 string 'd3gdgf' of length 6", () => {
  expect(arrange([3,6,2,3])).toBe([2,3,3,6]);
});
test("for 1 string 'hello' of length 5", () => {
  expect(arrange([9,42,15,6])).toBe([6,9,15,42]);
});
test("for 1 string 'chuoi23' of length 7", () => {
  expect(arrange([4,2,7,2])).toBe([2,2,4,7]);
});
