function median(values){
  if(values.length === 0) throw new Error("No inputs");
  values.sort(function(a,b){
    return a-b;
  });
  var half = Math.floor(values.length / 2);
  if (values.length % 2)
    return values[half];
  return (Number(values[half - 1]) + Number(values[half])) / 2;
}
function median(n){
  if(n===0)
}
function findMedian(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let n = newArr.length;
  let median;
  if (n % 2 === 0) {
    let m = n / 2;
    median = (newArr[m - 1] + newArr[m]) / 2;
  } else {
    let m = Math.floor(n / 2);
    median = newArr[m];
  }
  return median;
}
module.exports= findMedian