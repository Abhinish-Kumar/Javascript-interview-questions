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

```javascript

function outer(){
debugger;
var a=23;
return function inner(){
console.log(a);
}
a=122;
}

var getinnerfunction=outer();
getinnerfunction();
//122
 

```




```javascript
function parent(){
var b=300;
function outer(){
debugger;
var a=23;
return function inner(){
console.log(a,b);
}
a=122;
}

var getinnerfunction=outer();
getinnerfunction();

 )

parent();//122,300

```
Inner function forms a closure with its outer and parent functions scope.
Closure makes the language very powerful.Because of its capability to remember data.

### What are the common uses of closure?
1. Module design pattern.
2. Currying.
3. Function like once.Run once.
4. Memoization.
5. Maintaining state in async world.
6. setTimeOuts.

"A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished."













