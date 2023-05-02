function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  return newArray
}
characters("A man a plan a canal Panama")

module.exports=characters

