const subsequence = require("./subsequence ");

test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="abcdef";
  const s2="abczyzcdef";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("cdef");
});
test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="BA";
  const s2="";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("");
});
test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="";
  const s2="";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("");
});
test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="";
  const s2="";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("");
});
test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="";
  const s2="";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("");
});