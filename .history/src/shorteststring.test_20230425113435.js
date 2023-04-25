const shorteststringr  = require("./shorteststring");

test("shortest string in list('hello','world') is ('hello','world') of length 5 ", () => {
  expect(shorteststringr("hello","world")).toBe(("hello","world"));
});

test("shortest string in list('chao','ban') is ('ban') of length 3 ", () => {
  expect(shorteststringr("chao","ban")).toBe("ban");
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


