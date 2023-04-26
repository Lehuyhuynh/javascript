function greatvalue2(m){
  let newArr = m.sort((a, b) => a - b);
  // return newArr[m.length-2];
  
  return  newArr[m.length-2]
}

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
 
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[uniqa.length-2]);
  return result.join(',');
  }

Second_Greatest_Lowest([1,2,5,4,5]);

module.exports= greatvalue2