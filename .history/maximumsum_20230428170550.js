function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  return newArray
}
characters("")

module.exports=characters

