function maximum(a)
{
  var sum =0;
  for(var i=0; i<= a.length; i++){
    sum=a[i]+a[i+2]+a[i+3]+a[i+4]
  } 
  return sum
}
maximum([2,4,5,7,10])

module.exports= divisible