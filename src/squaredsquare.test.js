const squaredsquare = require("./squaredsquare");

test("for 1 string 'had' of length 3", () => {
  expect(squaredsquare(5)).toBe(25);
});

test("for 1 string 'had' of length 3", () => {
  expect(squaredsquare(6)).toBe(36);
});

test("for 1 string 'had' of length 3", () => {
  expect(squaredsquare(2)).toBe(4);
});

test("for 1 string 'had' of length 3", () => {
  expect(squaredsquare("100_true")).toBe(NaN);
});
test("for 1 string 'had' of length 3", () => {
  expect(squaredsquare("s")).toBe(NaN);
});
