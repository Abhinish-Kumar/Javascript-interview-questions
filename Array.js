
//1. write append function to append an element with time complexity O(1)
      let arr = [1, 2, 3, 4];
      //O(n)
      function append(element) {
        arr[arr.length] = element;
      }

      append(5);
      append(6);
      console.log(arr);
//==>>  [1, 2, 3, 4, 5, 6]


//2.  
//insert the element in an array at a given index in an array by shifting the elements from back
      //min(1)  max(n)
      let arr = [1, 2, 3, 4, 5];
      function insert(index, element) {
        for (let i = arr.length; i > index; i--) {
          arr[i] = arr[i - 1];
        }
        arr[index] = element;
      }

      insert(2, 50000);
      console.log(arr);

//==> [1, 2, 50000, 3, 4, 5]


//3.  
//wap to delete an element of an array with index number
      //and return that deleted element
      //max O(n) , min O(1)   if at first index

      let arr = [100, 200, 300, 400, 500];

      function del(index) {
        let element = arr[index];
        for (let i = index; i < arr.length - 1; i++) {
          arr[i] = arr[i + 1];
        }
        arr.length--;
        return element;
      }
      console.log(del(2)); //300
      console.log(arr); // [100, 200, 400, 500]


//4.
//Implement linear search , by taking a key element , if fount return index, i not then return -1
      //beast case O(1)
      //worst case O(n)
      //average case O(n)

      let arr = [500, 200, 600, 300, 700, 900, 800];

      function linearSearch(key) {
        for (let i = 0; i < arr.length; i++) {
          if (key == arr[i]) {
            return i;
          }
        }
        return -1;
      }

      console.log(linearSearch(300)); //3
      console.log(linearSearch(13));  //-1


//5. //Imporove linear search
      //1. Transposition method , if found swap to its previous element
      //slow reduction time taken

      let arr = [500, 200, 600, 300, 700, 900, 800];

      function linearSearch(key) {
        for (let i = 0; i < arr.length; i++) {
          if (key == arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            return i - 1;
          }
        }
        return -1;
      }
      console.log(arr); //[500, 200, 600, 300, 700, 900, 800]
      console.log(linearSearch(900));//4
      console.log(arr); //[500, 200, 600, 300, 900, 700, 800]

        //2. Move to Head/front method , if found swap with first element
      //sudden reduction time taken

      let arr = [500, 200, 600, 300, 700, 900, 800];

      function linearSearch(key) {
        for (let i = 0; i < arr.length; i++) {
          if (key == arr[i]) {
            [arr[i], arr[0]] = [arr[0], arr[i]];
            return i - 1;
          }
        }
        return -1;
      }
      console.log(arr); //[500, 200, 600, 300, 700, 900, 800]
      console.log(linearSearch(900)); //4
      console.log(arr); //[900, 200, 600, 300, 700, 500, 800]



//6 Binary Search

//a. with loop
//Implement Binary search with loop
      // Array must be sorted

      let arr = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 39, 41, 43, 50];

      function binarySearch(element) {
        //first index
        let l = 0;

        //last index
        let h = arr.length - 1;
        //         let mid = Math.floor(l + h / 2); error

        while (l <= h) {
          //mid always update with new l and h
          let mid = Math.floor((l + h) / 2);
          if (arr[mid] == element) {
            return mid;
          } else if (element < arr[mid]) {
            //move to left
            h = mid - 1;
          } else {
            //move to right
            l = mid + 1;
          }
        }

        return -1;
      }
      console.log(arr[binarySearch(27)]);
      console.log(arr[binarySearch(33)]);
      console.log(binarySearch(330));




//b. 
 //Implement Binary search with recursion /tail recursion
      //not prefer because it uses stack
      // Array must be sorted

let arr = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 39, 41, 43, 50];

function binarySearchRecursive(l, h, element) {
  if (l > h) {
    return -1;
  }
  
  let mid = Math.floor((l + h) / 2);
  
  if (arr[mid] == element) {
    return mid;
  } else if (element < arr[mid]) {
    return binarySearchRecursive(l, mid - 1, element);
  } else {
    return binarySearchRecursive(mid + 1, h, element);
  }
}

function binarySearch(element) {
  return binarySearchRecursive(0, arr.length - 1, element);
}

console.log(binarySearch(27)); // Output: 7
console.log(binarySearch(33)); // Output: 9
console.log(binarySearch(330)); // Output: -1


//7 Get(index)   = read   O(1)
//We want to know the element at a particular index
//If index is valid (not more then length and less then 0)

  let arr = [4, 8, 10, 15, 18];

      function get(index) {
        if (index >= 0 && index < arr.length) {
          return arr[index];
        }
        return -1;
      }

      console.log(get(4)); //18
      console.log(get(0)); //4



//8 set(index,x)     O(1)
//update value at a particular index
//return updated array

 let arr = [4, 8, 10, 15, 18];

      function set(index, x) {
        if (index >= 0 && index < arr.length) {
          arr[index] = x;
          return arr;
        }
        return -1;
      }

      console.log(set(4, 900)); //[4, 8, 10, 15, 900]
      console.log(set(0, 1111)); //[1111, 8, 10, 15, 900]



//9 max()  O(n)
//If list is sorted return last element O(1)

 let arr = [4, 8, 100, 15, 18];

      function max() {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
          if (max < arr[i]) {
            max = arr[i];
          }
        }
        return max;
      }

      console.log(max()); //100

//10 min()  O(n)



 let arr = [40, 8, 100, 15, 18];

      function min() {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
          if (min > arr[i]) {
            min = arr[i];
          }
        }
        return min;
      }

      console.log(min()); //8


//11 sum() find summ of all array element  O(n)

//traverse all element and add then to a total variable and return that.

 let arr = [100, 200, 200, 500, 1000];

      function sum() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }
      console.log(sum());//2000




//12 sum() recursive version O(n)


//13 Average() 
//sum of all the element divide number of elements

let arr = [100, 200, 200, 500, 1000];

      function average() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum / arr.length;
      }
      console.log(average());//400




































