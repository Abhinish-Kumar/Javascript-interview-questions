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



