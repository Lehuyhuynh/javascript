function median(values){
  if(values.length === 0) throw new Error("No inputs");
  values.sort(function(a,b){
    return a-b;
  });
  var half = Math.floor(values.length / 2);
  if (values.length % 2)
    return values[half];
  return (Number(values[half - 1]) + Number(values[half])) / 2;
}
function median(n){
  
}
module.exports= median