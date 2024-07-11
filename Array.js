
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
























