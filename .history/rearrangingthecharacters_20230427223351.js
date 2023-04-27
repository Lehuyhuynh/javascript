function chunkArray(myArray){
  var i= 0;
  var tempArray = [];
  var number=0
  var sum=0
  for (i = 0; i < array.Length; i ++ ){
     if(sum < array[i].length){

      sum=array[i]
      number+=1
     }
    tempArray.push(sum);
  }

  return tempArray;
}


module.exports= chunkArray
