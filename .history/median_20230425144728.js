function median(values){
 var arr = values.sort((a,b) => a - b);
  var half = Math.floor(values.length / 2);
  if (values.length % 2 === 0)
    return values[half];
  return (Number(values[half - 1]) + Number(values[half])) / 2;
}



module.exports= findMedian