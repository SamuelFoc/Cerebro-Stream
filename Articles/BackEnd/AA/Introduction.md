## Introduction to REST API

In this lesson, we will learn about REST API and how to create one using ExpressJS.

### What is REST API?

REST stands for Representational State Transfer. It is an architectural style for building web services that are lightweight, scalable, and maintainable. RESTful APIs communicate using HTTP requests and responses, and they follow a set of constraints and principles that make them easier to use and understand.

RESTful APIs are based on resources, which are the things that the API provides access to. Each resource is identified by a URI (Uniform Resource Identifier), and it can be manipulated using a set of HTTP methods (GET, POST, PUT, DELETE).

ExpressJS is a popular web framework for Node.js that makes it easy to build RESTful APIs. It provides a set of tools and features that simplify the process of creating, testing, and deploying APIs.

### Creating a REST API with ExpressJS

To create a RESTful API with ExpressJS, we need to follow these steps:

1. Install and set up ExpressJS
   We need to have Node.js and npm installed on our system before we can use ExpressJS. We can install ExpressJS by running the following command in our terminal:

```bash
npm init -y
npm install express
```

!["RestApi Image](/Articles/BackEnd/RestApi/intro1.png)

Once we have installed ExpressJS, we can create a **app.js** file and import it:

```javascript
const express = require("express");
const app = express();
```

2. Define the API routes
   We need to define the routes that our API will handle. Each route is a combination of an HTTP method and a URI. For example, we can define a route for getting a list of users like this:

```javascript
app.get("/users", (req, res) => {});
```

3. Implement the API logic
   We need to implement the logic for each API route. This logic can include accessing a database, reading and writing files, or calling external APIs. For example, we can implement the logic for getting a list of users like this:

```javascript
app.get("/users", (req, res) => {
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ];
  res.send(users);
});
```

4. Start the server
   We need to start the ExpressJS server so that it can listen for incoming requests. We can do this by running the following command:

```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

5. Add Start script into the package.json

Go to the package.json file and under the scripts add:

```json
"start": "node app.js"
```

Now you will be able to start your app just using the command:

```bash
npm start
```

!["RestApi Image](/Articles/BackEnd/RestApi/intro2.png)

This will start the server on port 3000, and we can access our API by sending requests to http://localhost:3000.

### File content

- app.js
  !["RestApi Image](/Articles/BackEnd/RestApi/intro3.png)

### Testing the API

We can test our API using tools like Postman or curl. For example, we can send a GET request to http://localhost:3000/users and expect to receive a list of users in JSON format.

### Conclusion

In this lesson, we learned about RESTful APIs and how to create one using ExpressJS. We saw how to define routes, implement logic, and start the server. We also saw how to test the API using tools like Postman or curl. With this knowledge, we can now create our own RESTful APIs and use them to build powerful web applications.
