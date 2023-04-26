function secondsmallest(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  });
   var result =[];
   var unipq = [arr_num[0]]
   for(var j=1 ; j< arr_num.length ; j++){
    if(arr_num[j-1] !== arr_num[j]){
      return unipq.push(arr_num[j])
    }
   }
   result.push(unipq[1])
   return result[1]
   Second_Greatest_Lowest([2,4,5,7,1,1]));
  
}
module.exports= secondsmallest
