unction reverses(myArray){
  var newArray=[]
  // for (let i= myArray.length-1; i>=0;i--){
  //     newArray.push(myArray[i])
  // }
  // return newArray.join('')
  myArray.forEach(item=>{
    newArray.unshift(item)
    
  });
  return newArray

}
module.exports=reverses
