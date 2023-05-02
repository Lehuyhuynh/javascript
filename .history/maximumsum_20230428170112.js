function characters(myArray ){
  var maxsum=0;
  var sum
  for(var i=0 ; i< myArray.length-3;i++){
    sum= myArray[i]+myArray[i+1]+myArray[i+2]+myArray[i+3]
    if(maxsum<sum){
      maxsum=sum
    }
   
  }
  return maxsum

    
}

module.exports=characters

