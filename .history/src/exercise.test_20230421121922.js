const level1 = require("./exercise");

test("adds 1 + 2 to equal 3", () => {
  expect(level1(1, 2)).toBe(3);
});

test("add 3+5 to equal 8", () => {
                    expect(level1(3,5)).toBe(8);
});

test("add 2+6 to equal 6", () => {
                    expect(level1(2,4)).toBe(6);
});
test("add 4+5 to equal 9", () => {
                    expect(level1(4,5)).toBe(9);
});
test("add 2+9 to equal11", () => {
                    expect(level1(2,9)).toBe(11);
});
