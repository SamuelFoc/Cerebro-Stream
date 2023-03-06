Working with external APIs in Express

#### HTTP

In Express, we can use the built-in http module to send HTTP requests to external APIs, just like we did in the previous lesson:

```javascript
const http = require("http");

app.get("/github", (req, res) => {
  const options = {
    hostname: "api.github.com",
    path: "/users/octocat",
    headers: {
      "User-Agent": "Node.js",
    },
  };

  const req = http.request(options, (apiRes) => {
    let data = "";
    apiRes.on("data", (chunk) => {
      data += chunk;
    });
    apiRes.on("end", () => {
      res.send(JSON.parse(data));
    });
  });

  req.on("error", (err) => {
    console.error(`Request error: ${err.message}`);
    res.status(500).send("Internal server error");
  });

  req.end();
});
```

This code defines a route for /github that sends a request to the GitHub API and returns the parsed JSON data as the response.

#### AXIOS

We can also use Axios instead of the built-in http module:

```javascript
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/github", async (req, res) => {
  try {
    const response = await axios.get("https://api.github.com/users/octocat", {
      headers: {
        "User-Agent": "Node.js",
      },
    });
    res.send(response.data);
  } catch (err) {
    console.error(`Request error: ${err.message}`);
    res.status(500).send("Internal server error");
  }
});
```

In this code, we're using the axios library to make an AJAX request to the GitHub API instead of the built-in http module. The async/await syntax is used to handle the asynchronous nature of the AJAX request, and the response is sent back to the client in the same way as before.

#### FETCH

There is also possibility of use the fetch API instead of the built-in http module or Axios:

```javascript
const express = require("express");
const app = express();

app.get("/github", (req, res) => {
  fetch("https://api.github.com/users/octocat", {
    headers: {
      "User-Agent": "Node.js",
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(`Request error: ${err.message}`);
      res.status(500).send("Internal server error");
    });
});
```

In this code, we're using the fetch API to make a request to the GitHub API instead of the built-in http module. We're also using the json() method to parse the response body as JSON, and sending the parsed data back to the client in the same way as before. The catch block is used to handle any errors that might occur during the request.
