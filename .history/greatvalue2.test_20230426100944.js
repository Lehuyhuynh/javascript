const greatvalue2= require("./greatvalue2");



// test("2nd largest number in the sequence", () => {
//   expect(greatvalue2([3,5,4])).toBe([4]);
// });

// test("2nd largest number in the sequence", () => {
//   expect(greatvalue2([3,-5,4,-9])).toBe([3]);
// });
// test("2nd largest number in the sequence", () => {
//   expect(greatvalue2([-2,-3,-4,-5])).toBe([-3]);
// });
// test("2nd largest number in the sequence", () => {
//   expect(greatvalue2([-3, 2,4,5])).toBe([4]);
// });
// test("2nd largest number in the sequence", () => {
//   expect(greatvalue2([3,5,4,5,0])).toBe([4]);
// });
test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [5, 2, 8, 1, 6];
  const sortedArr = greatvalue2(arr_);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});