function chunkArray(myArray){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var number=0
  var sum=[]
  for (i = 0; index < arrayLength; index ++ ){
     if(sum.length < array[i].length){

      sum=array[i]
      number+=1
     }
    tempArray.push(sum);
  }

  return tempArray;
}


module.exports= chunkArray
