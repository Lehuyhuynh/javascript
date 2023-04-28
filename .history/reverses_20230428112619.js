function reverses(myArray){
  let text=[]
  let newArray=[]
    let letters =new Set(myArray);
    
    letters.forEach(function(value){
      text += value
     
    });
     return text
  }
module.exports=reverses
