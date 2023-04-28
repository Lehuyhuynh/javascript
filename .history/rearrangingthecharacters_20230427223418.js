function chunkArray(myArray){
  var i= 0;
  var tempArray = [];
  var number=0
  var sum=0
  for (i = 0; i < myArray.Length; i ++ ){
     if(sum < myArray[i].length){

      sum=myArray[i]
      number+=1
     }
    tempArray.push(sum);
  }

  return tempArray;
}


module.exports= chunkArray
