function maximum(a)
{
  var sum = 0
  for( var i=0; i<a.length;i++){
      sum=sum+a[i];
  }
  if(sum % 3 ==0  && sum % 5==0 )  {
    return sum;
  }
  
}

module.exports= divisible