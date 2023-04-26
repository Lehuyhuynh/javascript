function divisible(a)
{
  var sum = 0
  for( var i=0; i<a.length;i++){
      sum=sum+a[i];
  }
  if(sum % 3  && sum % 5 )  {
    return sum;
  }
  else{ return }
  return sum
 
}
divisible([4,6,2,8,3])
module.exports= subsequence