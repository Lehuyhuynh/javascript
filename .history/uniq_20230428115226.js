function uniqArrayObject(myArray){
  let text=[]
    let letters =new Set(myArray);
    
    letters.forEach(function(value){
      text += value
     
    });
     return text
  }
module.exports=uniqArrayObject
console
