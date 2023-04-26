const greatvalue2= require("./greatvalue2");



test("2nd largest number in the sequence", () => {
  expect(greatvalue2([3,5,4])).toBe(4);
});

test("2nd largest number in the sequence", () => {
  expect(greatvalue2([3,-5,4,-9])).toBe(3);
});
test("2nd largest number in the sequence", () => {
  expect(greatvalue2([-2,-3,-4,-5])).toBe(-3);
});
test("2nd largest number in the sequence", () => {
  expect(greatvalue2([NaN, 2,4,5])).toBe(4);
});
test("2nd largest number in the sequence", () => {
  expect(greatvalue2(["3",5,4,5,0])).toBe();
});
