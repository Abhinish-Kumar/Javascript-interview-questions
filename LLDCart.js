  let lessonsData = [
        {
          name: "The thirsty crow",
          rate: 500,
        },
        {
          name: "The hungry dog",
          rate: 300,
        },
        {
          name: "The rich dad",
          rate: 400,
        },
        {
          name: "The mughal emperor",
          rate: 700,
        },
      ];

      // Lesson Class
      class Lesson {
        constructor(name, rate) {
          this.name = name;
          this.rate = rate;
        }

        render() {
          let data = document.createElement("div");
          data.innerHTML = `<div>
      <h2>${this.name}</h2><p>${this.rate}</p>
      </div>`;
          return data;
        }
      }

      // Cart Class
      class Cart {
        constructor() {
          this.cartList = [];
        }

        addLesson(lesson) {
          console.log(lesson);
          this.cartList.push(lesson);
          console.log(this.cartList);
          this.renderCart();
        }

        renderCart() {
          console.log("Current cart items:", this.cartList);
          let cartRoot = document.querySelector("#cart");
          cartRoot.innerHTML = ""; // Clear previous cart data

          this.cartList.forEach((lesson) => {
            let cartItem = document.createElement("div");
            cartItem.innerHTML = `<div>
        <h2>${lesson.name}</h2><p>${lesson.rate}</p>
        </div>`;
            cartRoot.appendChild(cartItem);
          });
        }

        total() {
          let t = 0;
          let total = this.cartList.map((a) => {
            t += a.rate;
          });
          return t;
        }
      }

      // Initialize and render lessons
      lessonsData.forEach((lessonData) => {
        let lesson = new Lesson(lessonData.name, lessonData.rate);
        let root = document.querySelector("#root");
        root.appendChild(lesson.render());
      });

      // Example usage of Cart class
      let cart = new Cart();
      // Add lessons to the cart, for example:
      cart.addLesson(new Lesson("The thirsty crow", 500));
      cart.addLesson(new Lesson("The acs crow", 400));
      cart.addLesson(new Lesson("The acs crow", 400));
      let k = cart.total();
      console.log(k);
