const shorteststringr  = require("./shorteststring");



test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 2, 8, 1, 6];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

test("shortest string in list(367,'js') is (js) of length 2", () => {
  expect(shorteststringr(367,'js')).toBe('js');
});

test("shortest string in list('javascipt','js') is (js) of length 2", () => {
  expect(shorteststringr('javascript','js')).toBe('js');
});

test("shortest string in list('html','css') is ('css') of length 3 ", () => {
  expect(shorteststringr("html","css")).toBe("css");
});


