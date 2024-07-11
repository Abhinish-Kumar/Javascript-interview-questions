
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
