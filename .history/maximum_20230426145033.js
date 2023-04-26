function maximum(a)
{
  sum=0
  var sum1 =a[0]+a[1]+a[2]+a[3];
  for(var i=1;i++; i+3 <= a.length){
    sum=a[i]+a[i+1]+a[i+2]+a[i+3]
    if(sum1 < sum){
      return sum
    }
    return sum
  } 
  return sum;
}
maximum([2,4,5,7,10])

module.exports= divisible