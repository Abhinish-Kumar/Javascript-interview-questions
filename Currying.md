# Currying 
1. Currying  name is named after a Mathematician Haskell B. Curry.
2. He takes this concept from lamda calculas.
3. Currying takes a function that receives more than one parameter and breaks it into a series of unary(one parameter) functions.
4. Therefore, a curried function only takes one parameter at a time.eg


```javascript

const buildingCurrying=(firstParam)=>{

    return (secondParam)=>{
         return(thirdParam)=>{
              return `${firstParam}, ${secondParam},${thirdParam}`;

}}}

const buildingCurryingVar=buildingCurrying("Apple")("ball")("cat");

```


