function understanding(arr_num)
{
   arr_num.sort(function(a,b){
    return a-b
  })
  
  return arr_num[-1] -arr_num[0]
  
}
understanding([2,4,3,5])
module.exports= understanding
