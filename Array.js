
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









