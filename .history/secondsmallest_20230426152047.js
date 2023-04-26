function secondsmallest(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  });
  
}
module.exports= secondsmallest