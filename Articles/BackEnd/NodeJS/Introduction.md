## HTTP Server

Welcome to your first lesson in backend programming in Node.js without any additional libraries! In this lesson, we will cover the basics of Node.js and how to create a simple HTTP server.

Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side. It is built on top of the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.

To get started, you will need to have Node.js installed on your computer. You can download the latest version from the official website: **https://nodejs.org/en/download/**

Once you have Node.js installed, open your preferred text editor and create a new file called **server.js**. This will be the main file for our server.

In **server.js**, we will start by requiring the built-in http module. This module provides a simple way to create an HTTP server:

```javascript
const http = require("http");
```

Next, we will create a server using the createServer method provided by the http module:

```javascript
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!");
});
```

This code creates a server that listens for incoming requests on port 3000. When a request is received, it sets the response status code to 200 and the content type to plain text. Finally, it sends the response with the message **"Hello, world!"**.

To start the server, we need to call the listen method on the server object:

```javascript
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
```

This code starts the server and logs a message to the console indicating that the server is running.

To test the server, open your web browser and navigate to **http://localhost:3000/**. You should see the message "Hello, world!" displayed in your browser.

Congratulations! You have successfully created a simple HTTP server using Node.js without any additional libraries. In the next lesson, we will explore how to handle different types of HTTP requests and responses.
