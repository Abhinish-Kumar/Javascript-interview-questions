const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_KEY = "kjabsabk";

// Simulate a user database with hashed passwords and roles
let users = [
  {
    id: 1,
    username: "john",
    password: "1234", // Hashed password for "password123"
    role: "user",
  },
  {
    id: 2,
    username: "admin",
    password: "$2b$10$EXAMPLEHASHEDPASSWORD", // Hashed password for "admin123"
    role: "admin",
  },
];

// Home route
app.get("/", (req, res) => {
  res.send("Home page");
});

// Registration route
app.post("/register", async (req, res) => {
  const { username, password, role = "user" } = req.body;

  console.log(users);
  // Check if the username is already taken
  const userExists = users.find((u) => u.username === username);
  if (userExists) return res.status(400).send("Username already exists");

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user
  const newUser = {
    id: users.length + 1, // Generate a new ID
    username,
    password: hashedPassword, // Store the hashed password
    role,
  };

  // Save the user to the database
  users.push(newUser);

  // Respond with success
  res.status(201).send("User registered successfully");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find((u) => u.username == username);
  console.log(!user);
  if (!user) return res.status(401).send("Invalid username or password");

  // Compare the provided password with the hashed password
  const isValidPassword = bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(401).send("Invalid username or password");

  // Generate a JWT
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
  res.send({ token });
});

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Unauthorized");

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user; // Attach the user to the request object
    next();
  });
};

// Role-based middleware
const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).send("Forbidden");
    next();
  };
};

// Protected route
app.get("/profile", authMiddleware, (req, res) => {
  res.send(`Welcome, ${req.user.username}`);
});

// Admin-only route
app.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.send("Admin dashboard");
});

// Start the server
app.listen(3300, () => {
  console.log("Server is running on http://localhost:3300");
});

/**
 * {
  "username": "newuser",
  "password": "newpassword",
  "role": "user" // Optional, defaults to "user"
}


POST /register HTTP/1.1
Content-Type: application/json

{
  "username": "newuser",
  "password": "newpassword"
}
 */
