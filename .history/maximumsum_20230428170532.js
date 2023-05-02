function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  return newArray
}

module.exports=characters

