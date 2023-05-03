function distinctsubsequences(arr_num)
{
  arr_num.sort(function(x,y)
  {
  return x-y;
  });
  var result = [];
  var uniqa = [arr_num[0]];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa);
  return result;
  }
console.log(distinctsubsequences([2,3,] ));
module.exports= distinctsubsequences