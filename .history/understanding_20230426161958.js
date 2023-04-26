function understanding(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  })
  
}
understanding([])
module.exports= understanding
