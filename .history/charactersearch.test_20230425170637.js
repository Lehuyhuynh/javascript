const  charactersea= require("./charactersearch");

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersea(["avbc", "bbxxcvv", "asadfqw", "ccsaff"])).toBe(3);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersea(["asd", "a", "bbsad", "drrar"])).toBe(4);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersea(["sd", "", "bbsd", "drrr"])).toBe(0);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(charactersea(["sd", "ad", "bbsd", "drrr", "dhdshas"])).toBe(2);
});


// test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
//   const m = "i have 3 kids";
//   const sortedm = charactersearch(m);
//   expect(sortedm).toEqual(4);
// });

// test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
//   const m = "The, quick brown  fox jumps over the lazy dog.";
//   const sortedm = charactersearch(m);
//   expect(sortedm).toEqual(10);
// });

// test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
//   const m = "The, quick brown fox jumps over the lazy dog.      ";
//   const sortedm = charactersearch(m);
//   expect(sortedm).toEqual(15);
// });

// test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
//   const m = "          The, quick brown fox jumps over the lazy dog.";
//   const sortedm = charactersearch(m);
//   expect(sortedm).toEqual(19);
// });
