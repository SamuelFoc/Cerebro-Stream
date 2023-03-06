## Define a Model

As first you should create a new directory called models in which we will store all our database models and in that directory create a file called **User.js**.

#### Create a model

Create a new model using the sequelize.define() method. In the code below, we define a User model with two properties: name and email.

```javascript
const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
```

#### Synchronize the model with the database

After defining the model, we need to synchronize it with the database using the sequelize.sync() method. This method creates the table in the database if it doesn't exist or updates the table's schema if it has changed since the last sync.

```javascript
(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to sync the database:", error);
  }
})();
```

![DB image](/Articles/BackEnd/SQLite/models2.png)

#### Use the model

Now that the model is defined and synchronized with the database, we can use it to interact with the database. Create a new file in the root directory called **index.js** and write the following code int it. In the code below, we create a new user and find all the users in the database.

```javascript
const sequelize = require("./database");
const User = require("./models/User");

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");

    const user = await User.create({
      name: "John Doe",
      email: "john.doe@example.com",
    });
    console.log("User created:", user.toJSON());

    const users = await User.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Unable to sync the database:", error);
  }
})();
```

To try this you can execute **node index.js** in terminal and you should see following:

![DB image](/Articles/BackEnd/SQLite/models4.png)

The User.create() method creates a new user with the specified name and email and inserts it into the database. The User.findAll() method retrieves all the users from the database and returns them as an array of objects.

And that's it! You now know how to create models using Sequelize and SQLite with the sequelize.define() method. Remember to always close the database connection using sequelize.close() when you're done using it.

#### The root directory structure

![DB image](/Articles/BackEnd/SQLite/models3.png)
