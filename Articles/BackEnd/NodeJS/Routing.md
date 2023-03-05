## Routing

Welcome to your second lesson in backend programming in Node.js without any additional libraries! In this lesson, we will cover how to create routes for handling different types of HTTP requests.

In the previous lesson, we created a simple HTTP server that responded with a "Hello, world!" message for all incoming requests. However, in a real-world application, we will need to handle different types of requests and respond with appropriate data.

To create routes in Node.js, we can use the url and querystring modules, which are built-in to Node.js.

First, let's modify our server.js file to include the url and querystring modules:

```javascript
const http = require("http");
const url = require("url");
const querystring = require("querystring");
```

Next, we will modify our server to handle different types of requests based on the requested URL:

```javascript
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
```

In this code, we use the **url.parse** method to parse the requested URL and the **querystring.parse** method to parse any query parameters. We then use switch statement to handle different types of requests based on the requested URL.

For example, if the requested URL is **"/"**, we respond with a **"Hello, world!"** message. If the requested URL is **"/about"**, we respond with an **"About page"** message. If the requested URL is **"/contact"**, we respond with a **"Contact page"** message that includes the name and email query parameters. Finally, if the requested URL does not match any of our defined routes, we respond with a **404** status code and a **"Page not found"** message.

To test our new routes, we can navigate to different URLs in our web browser, such as **http://localhost:3000/**, **http://localhost:3000/about**, and **http://localhost:3000/contact?name=John&email=john@example.com**.

Congratulations! You have successfully created routes for handling different types of HTTP requests in Node.js without any additional libraries. In the next lesson, we will explore how to handle errors and exceptions in our server.
