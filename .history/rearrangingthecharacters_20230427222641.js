function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var number=0
  for (index = 0; index < arrayLength; index ++ ){
     if(array[i]<array[i+1]){
      var myChunk=array[i+1]
      number+=1
     }
    tempArray.push(myChunk);
  }

  return tempArray;
}


module.exports= chunkArray
