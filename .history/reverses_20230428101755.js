function reverses(myArray){
  var newArray=[]
  // for (let i= myArray.length-1; i>=0;i--){
  //     newArray.push(myArray[i])
  // }
  // return newArray.join('')
  myArray.forEach( => {
    newArray.unshift(item)
    
  });

}
module.exports=reverses
