const greatvalue2= require("./greatvalue2");

test('Sorts an array of positive numbers in ascending order', () => {
  const m = [2,5,3];
  const sortedArr = (m);
  expect(sortedArr).toEqual(["Alex Doe","Elon Doe","John Doe","Peter Doe"]);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersearch(["asd", "a", "bbsad", "drrar"])).toBe(4);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersearch(["sd", "", "bbsd", "drrr"])).toBe(0);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersearch(["sd", "ad", "bbsd", "drrr", "dhdshas"])).toBe(2);
});
