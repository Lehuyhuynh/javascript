function understanding(arr_num)
{
   arr_num.sort(function(a,b){
    return a-b
  })
  var c= arr_num.length
  return arr_num[c-1] -arr_num[0]
  
}
understanding([2,4,3,5])
module.exports= understanding
