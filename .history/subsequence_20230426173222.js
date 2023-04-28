function subsequence(arr_num)
{
  var x=1;
  for(var i=0; i< arr_num.length ; i++)
  {
   for (var j=0 ; j <arr_num.length-1; j++)
   {
    if(arr_num[i][j]<arr_num[i][j+1]){
      return x=x+1

    }
   }
  }
}

module.exports= understanding
