function subsequence(arr_num)
{
  var x=1;
  
  for(var i=1; i<= arr_num.length ; i++)
  {
    var f[i]=0;
   for (var j=0 ; j <i; j++)
   {
    if(arr_num[i][j]<arr_num[i][j+1]){
      return x=x+1

    }
   }
  }
}

module.exports= understanding
