## Error Handling

Welcome to your third lesson in backend programming in Node.js without any additional libraries! In this lesson, we will cover how to handle errors and exceptions in our server.

In a real-world application, it's important to handle errors and exceptions in a way that provides helpful feedback to the user and prevents the server from crashing.

Node.js provides a built-in error event that can be used to handle errors that occur within the server. To handle this event, we can modify our server.js file as follows:

```javascript
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQuery = querystring.parse(parsedUrl.query);

  switch (parsedUrl.pathname) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, world!");
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("About page");
      break;
    case "/contact":
      if (!parsedQuery.name || !parsedQuery.email) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Bad request");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Contact page: ${parsedQuery.name}, ${parsedQuery.email}`);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Page not found");
      break;
  }
});

server.on("error", (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

In this code, we've added an additional check in the **/contact** route to ensure that the name and email query parameters are provided. If they are not provided, we respond with a **400** status code and a **"Bad request"** message.

We've also added an error event listener to the server that logs any errors to the console.

To test this functionality, we can intentionally cause an error by attempting to listen on a port that is already in use. For example, we can modify the **server.listen** line to use port **3001** instead of **3000**:

```javascript
server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
```

When we run this modified code, we should see an error message in the console indicating that port 3001 is already in use.

Congratulations! You have successfully learned how to handle errors and exceptions in your server. In the next lesson, we will explore how to work with external APIs.
