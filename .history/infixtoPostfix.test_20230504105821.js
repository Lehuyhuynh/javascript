const infixtoPostfix = require("./infixtoPostfix.js");

test('Chuyển từ trung tố sang hậu tố.Tính giá trị biểu thức hậu tố', () => {
  const infix = [12+3+5+3+7+2]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual("32");
});
test('Chuyển từ trung tố sang hậu tố.Tính giá trị biểu thức hậu tố', () => {
  const infix = [1+ 2- 3+ 4/ 1]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual("4");
});
test('Chuyển từ trung tố sang hậu tố.Tính giá trị biểu thức hậu tố', () => {
  const infix = [2+3*6/8%9]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual("4.25");
});
test('Chuyển từ trung tố sang hậu tố.Tính giá trị biểu thức hậu tố', () => {
  const infix = [3+1-5^2+6]
  const sortedArr =  infixtoPostfix(infix);
  expect(sortedArr).toEqual("-9");
});


