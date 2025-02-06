// Create web server with express module
const express = require('express');
const app = express();
// Create a route for GET request
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage');
});
// Create a route for POST request
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});
// Create a route for PUT request
app.put('/comments', (req, res) => {
  res.send('PUT request to the homepage');
});
// Create a route for DELETE request
app.delete('/comments', (req, res) => {
  res.send('DELETE request to the homepage');
});
// Bind and listen the connections on the specified host and port
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Now, run the server using the following command
// $ node comments.js
// Output
// Server is running on http://localhost:3000
// Open browser and visit http://localhost:3000/comments
// Output
// GET request to the homepage
// Open browser and visit http://localhost:3000/comments
// Output
// POST request to the homepage
// Open browser and visit http://localhost:3000/comments
// Output
// PUT request to the homepage
// Open browser and visit http://localhost:3000/comments
// Output
// DELETE request to the homepage
// Press Ctrl+C to stop the server
// The above example demonstrates the handling of GET, POST, PUT, and DELETE requests using Express.js. 
// We have created routes for each HTTP method and send the response to the client. 
// You can test each request by visiting the URL in the browser.

// Express.js Route Parameters
// Express.js allows you to define route parameters in the URL. 
// The route parameters are named URL segments that are used to capture the values specified at their position in the URL. 
// The route parameters are prefixed with a colon (:). 
// The values of route parameters are stored in the req.params object.

// Example
// Create a new file named 'routes.js' and add the following code.