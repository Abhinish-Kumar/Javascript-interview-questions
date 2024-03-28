### 1. Print the original properties of an array?

```javascript

Array.prototype.extraProperty = "Oho";
const newArray = [1,2,3,4]
for(let x in newArray){
console.log(x);
}

/*0
 1
 2
 3
 extraProperty*/ 

```
We have to ignore the additional properties and print the real or actual properties of an array 


```javascript

for(let x in newArray){
if (newArray.hasOwnProperty(x)){
console.log(x);
}
}

/*0
 1
 2
 3 */ 

```

#### Note :-
The hasOwnProperty method in JavaScript is used to check if an object has a specific property as its own property, rather than inheriting it from its prototype chain. Here’s the syntax and how you use it:

```javascript

object.hasOwnProperty(property)

```


eg:- 

```javascript

const car = {
  make: 'Toyota',
  model: 'Corolla'
};

console.log(car.hasOwnProperty('make')); // true
console.log(car.hasOwnProperty('year')); // false

```

By using prototype we add a new property or key in object or array.


### 2. Implement a custom forEach in javascript?


In Interview try to focus at the mindset or intention of the interviewer.
Because they are only canforming that your know the basic or the depth of the concept.
Try to interect with the interviewer. If they give you a question and your solved it without any discussion and interaction with the interviewer then this interview is considered as a bad interview.


```javascript

//For fresher

Array.prototype.customForEachOne = function(callback){
for(let i=0; i < this.length;i++){
callback(this[i],i,this);
}
}

```


```javascript

//For fresher

Array.prototype.customForEachTwo = function(callback,thisContext){
if(typeof callback !== 'function'){
throw 'not a function'
}
const length = this.length;
let i=0;
while(i<length){
if (this.hasOwnProperty){
callback.call(thisContext,this[i],i,this);
}
i++;
}
}

```

















