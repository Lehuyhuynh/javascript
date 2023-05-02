function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  var new_Array=newArray.toLowerCase()
  arry=new_Array.reverse()
  return arry
}
characters("A man a plan a canal Panama")

module.exports=characters

