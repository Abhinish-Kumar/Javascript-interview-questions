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









