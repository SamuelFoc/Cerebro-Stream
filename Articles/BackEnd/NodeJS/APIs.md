## Usage of External APIs

Welcome to your fourth lesson in backend programming in Node.js without any additional libraries! In this lesson, we will cover how to work with external APIs.

In a real-world application, it's common to interact with external APIs to retrieve or modify data. Node.js provides a built-in http module that we can use to make HTTP requests to external APIs.

To demonstrate how to work with external APIs, let's create a simple server that retrieves information about a GitHub user using the GitHub API.

First, we'll need to obtain an access token from GitHub. To do this, go to your GitHub account settings, select "Developer settings", and then select "Personal access tokens". Generate a new token with the "user" scope, and save the token somewhere secure.

Next, we'll modify our **server.js** file to retrieve information about a GitHub user:

```javascript
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const accessToken = "YOUR_ACCESS_TOKEN_HERE";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQuery = querystring.parse(parsedUrl.query);

  switch (parsedUrl.pathname) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, world!");
      break;
    case "/github":
      if (!parsedQuery.user) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Bad request");
        return;
      }

      const options = {
        hostname: "api.github.com",
        path: `/users/${parsedQuery.user}`,
        headers: {
          "User-Agent": "Node.js HTTP client",
          Authorization: `token ${accessToken}`,
        },
      };

      const request = http.get(options, (response) => {
        if (response.statusCode !== 200) {
          res.statusCode = response.statusCode;
          res.setHeader("Content-Type", "text/plain");
          res.end(`Request failed: ${response.statusCode}`);
          return;
        }

        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          const userData = JSON.parse(data);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(userData));
        });
      });

      request.on("error", (err) => {
        console.error(`Request error: ${err.message}`);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal server error");
      });

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

In this code, we've added a new route for the **/github** endpoint that retrieves information about a GitHub user using the GitHub API. We use the http.get method to make a GET request to the API, passing in the user's username as a parameter.

We've also added error handling for the request, logging any errors to the console and returning an "Internal server error" message to the user.

To test this functionality, we can make a GET request to http://localhost:3000/github?user=USERNAME, where **USERNAME** is the GitHub username we want to retrieve information for. The server should return an object with all the information about given user.

Congratulations! You have successfully learned how to work with external APIs in Node.js. In the next lesson, we will cover how to read and write files.
