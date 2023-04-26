function secondsmallest(arr_num)
{
  arr_num.sort(function(a,b){
    return a-b
  });
   var result =[];
   var unipq = [arr_num[0]]
   for(var j=1 ; j< arr_num.length ; j++){
    if(arr_num[j-1] !== arr_num[j]){
      unipq.pus
    }
   }

  
}
module.exports= secondsmallest
