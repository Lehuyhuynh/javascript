function chunkArray(myArray){

  var tempArray = [];
  var number=0
  var sum=0
  for (var i = 0; i < myArray.Length; i ++ ){
     if(sum < myArray[i]){
      sum=myArray[i]
     }
     var arr= tempArray.push(sum);
  }

  return arr;
}


module.exports= chunkArray
