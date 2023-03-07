## Project

### Task

Create a simple NodeJS app that serves different messages on different routes.

### Solution

1. Create a new file called server.js.

2. Require the http module and create a new HTTP server:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  // handle requests here
});
```

3. Define your routes

For this task, we will create three routes, each serving a different message. To do this, we will use the req.url property to determine which route was requested, and the res.write() and res.end() methods to send the appropriate message. Add the following code to your server:

```javascript
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, world!");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is the about page.");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is the contact page.");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});
```

4. Start your server

```javascript
const port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
```

5. Test your app

Visit http://localhost:3000, http://localhost:3000/about, and http://localhost:3000/contact in your browser. You should see the appropriate message displayed on each page.
That's it! This is a simple example of how to create routes in pure NodeJS without any additional libraries. You can add more routes and customize the messages to fit your needs.

### GitHub Repository

[Link to repository](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/BackEnd/NodeJS/Project)
