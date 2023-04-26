function divisible(a)
{
  var sum = 0
  for( var i=0; i<a.length;i++){
      sum=sum+a[i];
  }
  return sum
  if(sum %3=0 && sum%5=0 )  {
    return sum
  }
 
}
divisible([4,6,2,8,5])
module.exports= subsequence