const Stringlength = require("./stringlength");

test("for 1 string 'had' of length 3", () => {
  expect(Stringlength("had")).toBe(3);
});

test("for 1 string '34' of length 1", () => {
  expect(Stringlength("34")).toBe(2);
});
test("for 1 string 'd3gdgf' of length 6", () => {
  expect(Stringlength("d3gdgf")).toBe(6);
});
test("for 1 string 'hello' of length 5", () => {
  expect(Stringlength("hello")).toBe(5);
});
test("for 1 string 'chuoi23' of length 7", () => {
  expect(Stringlength("chuoi23")).toBe(7);
});
