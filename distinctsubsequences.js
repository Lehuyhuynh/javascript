function distinctsubsequences(arr_num)
{
  arr_num.sort(function(x,y)
  {
  return x-y;
  });
  var number =1
  for(var i=1; i<arr_num.length; i++){
    for(var j=2; j<arr_num.length; j++){
      var c = arr_num[i-1]+arr_num[j]
      if(c == arr_num[arr_num.length-1]){
         number +=1
      }
    }
    number
  }
  return number
  
  }
console.log(distinctsubsequences([1,2,3,4,1] ));
module.exports= distinctsubsequences