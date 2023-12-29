# Javascript interview questions.

### What is a closure in JavaScript?
Closure is a function bundled with its lexical scope.Function itself with its lexical scope bundled together forms a closure.A closure give us access to an outer functions scope from an inner function.In javascript a closure is created every time a function is created.

```javascript

function outer(){
debugger;
var a=23;
function inner(){
console.log(a);
}
return inner();
}

var getinnerfunction=outer();
console.log(getinnerfunction);//contain the inner function only.
.....

.....

getinnerfunction();//innerfunction call output is
//23
 

```

Why we get 23 . We don't have a reference of a because of not having outer function. But the inner function remember its lexical scope that where it came from. On function call of inner function we get its lexical scope as well.Thats why we call function with its lexical scope.




















