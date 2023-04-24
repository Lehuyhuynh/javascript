const maxnumber = require("./maxnumber");

test("the most value in the number(5,6,3) is6", () => {
  expect(maxnumber(5,6,3)).toBe(6);
});

test("the most value in the number(3,5,1) is5", () => {
  expect(maxnumber(3,5,1)).toBe(5);
});

test("the most value in the number(4,7,9) is9", () => {
  expect(maxnumber(4,7,9)).toBe(9);
});

test("the most value in the number(2,5,1) is 5", () => {
  expect(maxnumber(2,5,1)).toBe(5);
});
test("the most value in the number(4,9,10) is 10", () => {
  expect(maxnumber(4,9,10)).toBe(10);
});
