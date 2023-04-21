const sum = require("./exercise");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add 3+5 to equal 8", () => {
  expect(sum(3,5)).toBe(8);
});

test("add 2+6 to equal 6", () => {
  expect(sum(2,4)).toBe(6);
});
test("add 4+5 to equal 9", () => {
                    expect(sum(4,5)).toBe(9);
});
test("add 2+9 to equal 11", () => {
                    expect(sum(2,9)).toBe(11);
});
