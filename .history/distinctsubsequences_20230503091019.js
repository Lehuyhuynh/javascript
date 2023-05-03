function distinctsubsequences(arr_num)
{
  arr_num.sort(function(x,y)
  {
  return x-y;
  });
  
  
  }
console.log(distinctsubsequences([2,3,7,5,8] ));
module.exports= distinctsubsequences