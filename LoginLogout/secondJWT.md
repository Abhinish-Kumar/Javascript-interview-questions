## Data Flow Overview
## Client Registration:

1. The client sends a POST request with username and password to the server.
The server hashes the password with bcrypt and stores the user details in a database (simulated by an array).
A success message is sent back to the client.
Client Login:

2. The client sends a POST request with username and password to the server.
The server checks the credentials by comparing the hashed password in the database.
If credentials match, the server creates a JWT token and sends it back to the client.
The client stores the token (usually in localStorage or a cookie) to use for subsequent requests.
Client Profile Request:

3. The client sends a GET request to fetch the profile, including the JWT token in the Authorization header.
The server verifies the JWT token.
If the token is valid, the server fetches the user profile from the database and sends it back to the client.
The client displays the profile details (like username, name, and email).


```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

// Use body parser middleware
app.use(bodyParser.json());

// Dummy database (just for illustration)
let users = [];

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the new user (including dummy profile data)
  const newUser = { username, password: hashedPassword, name: 'John Doe', email: 'johndoe@example.com' };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully!' });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found!' });
  }

  // Compare passwords using bcrypt
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials!' });
  }

  // Create a JWT token
  const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });

  res.json({ message: 'Login successful!', token });
});

// Profile endpoint (protected route)
app.get('/profile', (req, res) => {
  // Get the token from the request headers
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided!' });
  }

  // Verify the token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token!' });
    }

    // Find the user by the decoded username from the token
    const user = users.find(user => user.username === decoded.username);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Return the user's profile data
    res.json({ username: user.username, name: user.name, email: user.email });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

```

```javascript
// Example function to handle user registration
async function register(username, password) {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log(data.message); // Success message
  } else {
    console.error(data.message); // Error message
  }
}

// Example function to handle user login
async function login(username, password) {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log(data.message); // Login success
    localStorage.setItem('token', data.token); // Store the JWT token
  } else {
    console.error(data.message); // Error message
  }
}

// Example function to fetch the user's profile
async function getProfile() {
  const token = localStorage.getItem('token'); // Retrieve the stored token

  if (!token) {
    console.error('No token found. Please login first.');
    return;
  }

  const response = await fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
    },
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Profile:', data); // Display user profile data
  } else {
    console.error(data.message); // Error message
  }
}

// Example usage:
// Registering a new user
// register('newuser', 'password123');

// Logging in
// login('newuser', 'password123');

// Fetching the profile after login
// getProfile();


```




