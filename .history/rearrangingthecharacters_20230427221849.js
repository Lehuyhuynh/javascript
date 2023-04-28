function chunkArray(myArray){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index ++) {
      myChunk = myArray.slice(index, index+chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
  }

  return tempArray;
}


module.exports= chunkArray
