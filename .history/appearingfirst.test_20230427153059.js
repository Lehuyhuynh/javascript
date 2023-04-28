const  appearingfirst= require("./appearingfirst");

test('the minimum number of moves to set when arranging', () => {
  const array=['apple', 'manana', 'crange', 'btermelon']
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual([ 'btermelon', 'manana', 'crange', 'apple' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array=["largest" ,"difference" ,"between" ,"any two", "elements", "in the list"]
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual(5)
});
test('the minimum number of moves to set when arranging', () => {
  const array = ["Online", "35467384993948", "Editor", "for free"];
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual(5);
});
test('the minimum number of moves to set when arranging', () => {
  const array =[3, 10, 2, 1, 20]
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual(4);
});
test('the minimum number of moves to set when arranging', () => {
  const array = [50, 3, 10, 7, 40, 80 ]
  const sortedArr = appearingfirst(array);
  expect(sortedArr).toEqual(5);
});
