function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var number=0
  var sum=[]=0
  for (index = 0; index < arrayLength; index ++ ){
     if(sum<array[i]){

      sum=array[i]
      number+=1
     }
    tempArray.push(sum);
  }

  return tempArray;
}


module.exports= chunkArray
