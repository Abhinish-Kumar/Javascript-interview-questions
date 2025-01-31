Create a flag to check if user is loged in or not


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login and Profile</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f9;
        margin: 0;
      }
      .container {
        width: 300px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #fff;
        text-align: center;
      }
      h2 {
        margin-bottom: 20px;
      }
      .form-input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .form-btn {
        width: 100%;
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .form-btn:hover {
        background-color: #45a049;
      }
      .error {
        color: red;
      }
      .profile-container {
        display: none;
      }
      .profile-container.active {
        display: block;
      }
      .logout-btn {
        padding: 10px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .logout-btn:hover {
        background-color: #e53935;
      }
    </style>
  </head>
  <body>
    <div class="container" id="loginContainer">
      <h2>Login</h2>
      <form id="loginForm">
        <input
          type="text"
          id="username"
          class="form-input"
          placeholder="Username"
          required
        /><br />
        <input
          type="password"
          id="password"
          class="form-input"
          placeholder="Password"
          required
        /><br />
        <button type="submit" class="form-btn">Login</button>
      </form>
      <div id="errorMessage" class="error"></div>
    </div>

    <div class="container profile-container" id="profileContainer">
      <h2>Welcome to your Profile!</h2>
      <p>You are logged in.</p>
      <button class="logout-btn" onclick="logout()">Logout</button>
    </div>

    <script>
      // Simulate a simple login process
      const validUsername = "user";
      const validPassword = "password123";

      // Check if the user is logged in (by checking sessionStorage)
      if (sessionStorage.getItem("loggedIn")) {
        showProfile();
      }

      document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          if (username === validUsername && password === validPassword) {
            // Successful login
            sessionStorage.setItem("loggedIn", true); // Store the login status in session storage
            showProfile(); // Show the profile
          } else {
            // Show error message
            document.getElementById("errorMessage").textContent =
              "Invalid username or password";
          }
        });

      function showProfile() {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("profileContainer").classList.add("active");
      }

      function logout() {
        sessionStorage.removeItem("loggedIn");
        window.location.reload(); // Reload the page to reset the state
      }
    </script>
  </body>
</html>

```







step 1


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #userProfile {
        /* by default hide userprofile */
        display: none;
      }
      .show {
        /* show any of the container */
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="userProfile">
        <h1>User profile is here</h1>
        <p>name is abhinish</p>
      </div>
      <div id="loginPage">
        <form>
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <button>Submit</button>
        </form>
      </div>
    </div>

    <!-- conditionally show boxes -->
    <script>
            
      function showProfile() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("userProfile").style.display = "block"; // Directly change the display here
      }

      showProfile();
    </script>
  </body>
</html>

```

show and hide containers


step 2

if name and password match show profile else show error in login page



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #userProfile {
        /* by default hide userprofile */
        display: none;
      }
      .show {
        /* show any of the container */
        display: block;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="userProfile">
        <h1>User profile is here</h1>
        <p>name is abhinish</p>
      </div>
      <div id="loginPage">
        <form>
          <input type="text" placeholder="name" class="name" />
          <input type="password" placeholder="password" class="password" />
          <button>Submit</button>
          <p class="error"></p>
        </form>
      </div>
    </div>

    <!-- conditionally show boxes -->
    <script>
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (
          document.querySelector(".name").value === "abhinish" &&
          document.querySelector(".password").value === "1234"
        ) {
          showProfile();
        } else {
          document.querySelector(".error").innerText = "not a valid user";
        }
      });

      function showProfile() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("userProfile").style.display = "block"; // Directly change the display here
      }

      //       showProfile();
    </script>
  </body>
</html>

```



step 3 
use session storage 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #userProfile {
        /* by default hide userprofile */
        display: none;
      }
      .show {
        /* show any of the container */
        display: block;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="userProfile">
        <h1>User profile is here</h1>
        <p>name is abhinish</p>
        <div>
          <button id="logout">Logout</button>
        </div>
      </div>
      <div id="loginPage">
        <form>
          <input type="text" placeholder="name" class="name" />
          <input type="password" placeholder="password" class="password" />
          <button>Submit</button>
          <p class="error"></p>
        </form>
      </div>
    </div>

    <!-- conditionally show boxes -->
    <script>
      if (sessionStorage.getItem("loggedIn") === "true") {
        showProfile();
      }
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (
          document.querySelector(".name").value === "abhinish" &&
          document.querySelector(".password").value === "1234"
        ) {
          //set sesion if loged in
          sessionStorage.setItem("loggedIn", "true");
          showProfile();
        } else {
          document.querySelector(".error").innerText = "not a valid user";
        }
      });

      function showProfile() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("userProfile").style.display = "block"; // Directly change the display here
      }

      document.getElementById("logout").addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.setItem("loggedIn", "false");
        window.location.reload();
      });
      //       showProfile();
    </script>
  </body>
</html>

```

step 4

connect with server

```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3300;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., images, CSS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML file at the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST route for login
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);

  // Check credentials (hardcoded for now)
  if (name === "abhinish" && password === "1234") {
    // Here, set a session or JWT token (for simplicity, we'll skip session management)
    return res.json({ success: true });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
});

// Logout route (reset session or JWT token if used)
app.post("/logout", (req, res) => {
  // Clear session or JWT token if used
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #userProfile {
        display: none;
      }
      .show {
        display: block;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="userProfile">
        <h1>User profile is here</h1>
        <p>name is abhinish</p>
        <div>
          <button id="logout">Logout</button>
        </div>
      </div>
      <div id="loginPage">
        <form id="loginForm">
          <input type="text" placeholder="name" class="name" />
          <input type="password" placeholder="password" class="password" />
          <button>Submit</button>
          <p class="error"></p>
        </form>
      </div>
    </div>

    <script>
      if (sessionStorage.getItem("loggedIn") === "true") {
        showProfile();
      }

      document
        .querySelector("#loginForm")
        .addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.querySelector(".name").value;
          const password = document.querySelector(".password").value;

          const response = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
          });

          const data = await response.json();

          if (data.success) {
            sessionStorage.setItem("loggedIn", "true");
            showProfile();
          } else {
            document.querySelector(".error").innerText =
              data.message || "Invalid credentials";
          }
        });

      function showProfile() {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("userProfile").style.display = "block";
      }

      document.getElementById("logout").addEventListener("click", async (e) => {
        e.preventDefault();
        await fetch("/logout", {
          method: "POST",
        });
        sessionStorage.setItem("loggedIn", "false");
        window.location.reload();
      });
    </script>
  </body>
</html>

```


















