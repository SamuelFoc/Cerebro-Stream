## Routing in Express

Here's an example of how to use routing in ExpressJS:

```javascript
const express = require("express");
const app = express();

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Route for a dynamic parameter
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

// Route for handling POST requests
app.post("/submit", (req, res) => {
  const body = req.body;
  // Do something with the request body...
  res.send("Form submitted successfully");
});

// Route for handling all other requests
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

In this code, we're using the app.get() and app.post() methods to define routes. The app.get() method is used for handling GET requests, and the app.post() method is used for handling POST requests. We define routes for the homepage (/), the about page (/about), a dynamic parameter (/users/:id), and a form submission (/submit).

The dynamic parameter route uses a colon (:) to define a parameter in the URL. The value of the parameter can be accessed using the req.params object, which contains key-value pairs of parameter names and values.

The catch-all route at the end (\*) is used to handle all other requests that don't match any of the defined routes.

Finally, we start the server listening on port 3000 using the app.listen() method. When the server starts, it logs a message to the console.
