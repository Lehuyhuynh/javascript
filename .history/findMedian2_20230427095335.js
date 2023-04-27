function findMedian2(x,y) {
  let newArr = x.concat(y)
   let c = newArr.sort((a, b) => a - b);
  let n = c.length;
  let median;
  if (n % 2 === 0) {
    let m = n / 2;
    median = (c[m - 1] + newArr[m]) / 2;
  } else {
    let m = Math.floor(n / 2);
    median = newArr[m];
  }
  return median;
}
findMedian2([2,3], [1,5])
module.exports= findMedian2