const infixtoPostfix = require("./infixtoPostfix.js");

test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [1+2- 3* 4, 5]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual(15);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [1, 2, 3, 4, 1]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual(11);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [2,3,6,8,9]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual(28);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [3,1,5,2,6]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual(17);
});


