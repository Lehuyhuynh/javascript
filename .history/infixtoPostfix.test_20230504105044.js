const toPostfix = require("./infixtoPostfix.js");

test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [12+3+5+3+7+2]
  const sortedArr =  toPostfix(infix);
  expect(sortedArr).toEqual(32);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [1+ 2- 3 4, 1]
  const sortedArr =  toPostfix(infix);
  expect(sortedArr).toEqual(11);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [2,3,6,8,9]
  const sortedArr =  toPostfix(infix);
  expect(sortedArr).toEqual(28);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const infix = [3,1,5,2,6]
  const sortedArr =  toPostfix(infix);
  expect(sortedArr).toEqual(17);
});


