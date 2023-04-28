function reverses(myArray){
  let letters =new Set(myArray);
  let text = []
  letters.forEach(function(value){
    text += value
  });
  return text
}
module.exports=reverses
