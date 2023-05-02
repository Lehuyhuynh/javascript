function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  var new_Array=newArray.toLowerCase()
  var x=new_Array.join()
  return x
}
characters("A man a plan a canal Panama")

module.exports=characters

