function understanding(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  })
  var c= arr_num[-1] - arr_num[0]
  return arr_num[-1]
  
}
understanding([2,4,3,5])
module.exports= understanding
