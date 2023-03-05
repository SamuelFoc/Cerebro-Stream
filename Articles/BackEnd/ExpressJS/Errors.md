## Routing in Express

In Express, we can define routes using the app.get method, which takes a URL path and a callback function as arguments:

```javascript
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
```

This code defines a route for the root URL (/) that sends the string "Hello, world!" as the response.

We can also define routes with URL parameters:

```javascript
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});
```

This code defines a route for URLs that match the pattern /users/:id, where :id is a variable parameter. The req.params object is used to retrieve the value of the id parameter from the URL.
