function median(values){
  if(values.length === 0)  Error("No inputs"throw new);
  values.sort(function(a,b){
    return a-b;
  });
  var half = Math.floor(values.length / 2);
  if (values.length % 2)
    return values[half];
  return (Number(values[half - 1]) + Number(values[half])) / 2;
}
// function median(n){
//   if(n===0)
// }
module.exports= median