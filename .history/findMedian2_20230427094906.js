function findMedian2(x,y) {
  let newArr = x.concat(y)
  newArr = arr.sort((a, b) => a - b);
  return newArr;
  // let n = newArr.length;
  // let median;
  // if (n % 2 === 0) {
  //   let m = n / 2;
  //   median = (newArr[m - 1] + newArr[m]) / 2;
  // } else {
  //   let m = Math.floor(n / 2);
  //   median = newArr[m];
  // }
  // return median;
}
fin
module.exports= findMedian2