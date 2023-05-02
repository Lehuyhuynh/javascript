const subsequence = require("./longestpalindrome");

test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s ="Abcdef";
  const s2="abczyzcdef";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("cdef");
});
test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s1 ="BACDB";
  const s2="BDCB";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("BCB");
});
