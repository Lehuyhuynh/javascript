function understanding(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  })
  
}
understanding([2,4,3,5])
module.exports= understanding
