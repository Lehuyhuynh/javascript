function precedence(x)
{
  if (x == '(')
		return 0;
	if (x == '+' || x == '-')
		return 1 ;
	if (x == '*' || x == '/' || x == '%')
		return 2;

	return 3;
  }
fun
console.log(distinctsubsequences([1,2,3,4,1] ));
module.exports= distinctsubsequences