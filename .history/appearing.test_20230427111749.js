const appearing= require("./appearing");

test('largest difference between any two elements in the list..', () => {
  const array=["abab","cccc","d", "b333b333"]
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([ 'd', 'cccc', 'abab', 'b333b333' ]);
});
test('largest difference between any two elements in the list..', () => {
  const array= ["largest" ,"difference" ,"between" ,"any two", "elements", "in the list"]
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([
    'largest',
    'between',
    'any two',
    'elements',
    'difference',
    'in the list'
  ]
  );
});
test('largest difference between any two elements in the list..', () => {
  const array = ["Online", "35467384993948", "Editor", "for free"];
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([ 'Online', 'Editor', 'for free', '35467384993948' ]);
});
test('largest difference between any two elements in the list..', () => {
  const array =["33", "35467384993948", 33, "for free"]
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([ '33', 'for free', 33, '35467384993948' ]);
});
test('largest difference between any two elements in the list..', () => {
  const array = [NaN, "35467384993948", 33, "for free"]
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([ NaN, 'for free', 33, '35467384993948' ]);
});
