function chunkArray(myArray){
  var i= 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  var number=0
  var sum=[]
  for (i = 0; i < arrayLength; i ++ ){
     if(sum.length < array[i].length){

      sum=array[i]
      number+=1
     }
    tempArray.push(sum);
  }

  return tempArray;
}


module.exports= chunkArray
