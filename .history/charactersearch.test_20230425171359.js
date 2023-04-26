const  charactersearch= require("./charactersearch");

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersearch(["avbc", "bbxxcvv", "asadfqw", "ccsaff"])).toBe(3);
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
init