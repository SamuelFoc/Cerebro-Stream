## Database & REST API

In this lesson, we will learn how to use SQLite and Sequelize with our REST API. SQLite is a lightweight database engine that stores data in a local file, while Sequelize is a popular ORM (Object-Relational Mapping) library that makes it easier to work with databases in Node.js.

### Install SQLite and Sequelize

To use SQLite and Sequelize, we need to install them using npm. Run the following command in your terminal to install both:

```bash
npm init -y
npm install --save sqlite3 sequelize express
```

### Set up the ExpressJS

Create a file app.js in the root folder and add following code in it:

```javascript
const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("REST API running on port 3000.");
});
```

### Set up the database connection

We need to set up a database connection using Sequelize. We can do this by creating a new file database.js in the root directory and pass in the database configuration:

```javascript
const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
});

module.exports = sequelize;
```

This code creates a new Sequelize instance with the SQLite database engine and a local file for storing data.

### Define the data models

We need to define the data models that our API will use. A data model is a representation of a database table, and it defines the columns and their data types.

Create a models folder in the root directory and in it create a file called User.js with this content:

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

User.sync();

module.exports = User;
```

This code creates a User model with two columns: name (a string) and age (an integer).

### Set up the API routes

We need to set up the API routes that our application will handle. Create a new folder in the root directory and inside create a new file called User.routes.js with following code:

```javascript
const express = require("express");
const router = express.Router();

const User = require("../Models/User");

router
  .get("/", (req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    });
  })
  .post("/", (req, res) => {
    User.create({
      name: req.body.name,
      age: req.body.age,
    }).then((user) => {
      res.send(user);
    });
  });

module.exports = router;
```

This code defines a GET and a POST routes for /users.

### Start the server

We need to start the server so that it can listen for incoming requests. We can do this by running the following command:

```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

This code starts the server on port 3000, and we can access our API by sending requests to http://localhost:3000.

### Testing the API

We can test our API using tools like Postman or curl. For example, we can send a GET request to http://localhost:3000/users and expect to receive a list of users in JSON format. We can also send a POST request to http://localhost:3000/users with a JSON payload to create a new user.

- Postman POST request

!["REST API Image"](/Articles/BackEnd/RESTApi/database2.png)

- Postman GET request

!["REST API Image"](/Articles/BackEnd/RESTApi/database3.png)

### Conclusion

In this lesson, we learned how to use SQLite and Sequelize with our REST API. We saw how to set up the database connection, define data models, set up API routes, implement logic, and start the server. With this knowledge, we can now create powerful web applications that store data in a SQLite database and use Sequelize to interact with it.

### GitHub Repository

[Link to repository](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/BackEnd/RestApi/Database)
