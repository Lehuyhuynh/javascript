function secondsmallest(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  });
   var result =0;
   var unipq = [arr_num[0]]
  
}
module.exports= secondsmallest
function greatvalue2(arr_num)
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
    result.push(uniqa[uniqa.length-2]);
  return result;
  }
  greatvalue2