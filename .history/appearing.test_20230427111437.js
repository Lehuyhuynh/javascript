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
  const x = [3,5],y=[4,0];
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual([ 'Online', 'Editor', 'for free', 'Javascript' ]);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, -2, 1],y=[ 1, -6];
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual(1);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, 2, -8],y=[ 1, 6];
  const sortedArr = appearing(array);
  expect(sortedArr).toEqual(2);
});
