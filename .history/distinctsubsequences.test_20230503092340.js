const distinctsubsequences = require("./distinctsubsequences.js");

test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const arr_num = [1, 2, 3, 4, 5]
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual(3);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const arr_num = [1, 2, 3, 4, 1]
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual(4);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const arr_num = [2,3,6,8,9]
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual(2);
});
test('trả về số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích.', () => {
  const arr_num = [3,1,5,2,6]
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual(3);
});


