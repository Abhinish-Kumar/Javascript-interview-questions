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






### What is a javascript?
1. Javascript is a single threaded,non blocking,asynchronous concurrent language.
2. It has a call stack,en event loop and a callback queue + other apis.
3. V8 is the javascript runtime which has a call stack and a heap.
4. DOM ,settimeout,XML HttoRequeset doesnt exist V8 source code.
5. Sometime the javascript code can take a lot of time and this can block the page re render.
6. Javascript has asynchronous callbacks for non blocking behaviour.
7. Javascript runtime can do only one thing at a time.
8. Browser gives us other things which work along with the runtime like Web APIs.
9. In node.js these are available as C++ APIs,.

### What is a Task Queue?
1. Javascript can do only one thing at a time.
2. The rest are qequired to the task queue waiting to be excecuted.
3. When we run setTimeout,webapis will run a timer and push the fucntion provided to setTimeOut to the task queue once the timer ends.
4. These tasks will be pushed to the stack where they can excecuted.


### What is Event Loop in JavaScript?
Call stack kakes the function and run it and after it it destroy the function.And if any function that is insede it is returned some where it copy its lexical environment and bind it with its inner function and Destroy itself.

Asynchronous functions are like settimeout that can not block our code.

1. Javascript has a runtime model based on a event loop,which is responsible for executing the code,collecting and process events, and executing queued sub-tasks.
2. The event loop pushes the tasks from the task queue to the call stack.
3. setTimeOut(fun1,0) can be used to defer a fucntion until all the pending tasks (sofar) have been executed.
4. We can see how these things work in action by visiting.

The callback function wait with while its timer is started in environment of web and then it pushes all the taks after completion of the timer to the queue (FIFO) and event loop constantly watch the call stack and task queus and if the eventloop is empty and we have task to perform then event loop put the task to call stack to be executed.

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D




















