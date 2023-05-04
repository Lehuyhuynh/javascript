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
function operator(x){
  return ['+', '-','*','/','%']
}
function infixtoPostfix( infix){ 
  var postfix = '' , stack = [];
  for(i = 0; i<infix.length; i++){
    var x= infix[x];
    if(o(x)){
      while(stack.length>0&& precedence(stack[stack.length-1])&&precedence)
    }
  }

}
console.log(distinctsubsequences([1,2,3,4,1] ));
module.exports= distinctsubsequences