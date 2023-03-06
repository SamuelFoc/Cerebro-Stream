## Sequelize commands

Here are some basic Sequelize commands that you can execute on the User model. Open **index.js** file and replace the **async** function with commands below to try it.

#### Create a new user

To create a new user, use the create() method on the User model. The create() method takes an object with the user's properties and returns a Promise that resolves to the newly created user.

```javascript
User.create({
  name: "Alice Doe",
  email: "alice.doe@example.com",
})
  .then((user) => {
    console.log("User created:", user.toJSON());
  })
  .catch((error) => {
    console.error("Unable to create user:", error);
  });
```

![Commands image](/Articles/BackEnd/SQLite/commands1.png)

console output:

![Commands image](/Articles/BackEnd/SQLite/commands2.png)

#### Update a user

To update a user, use the update() method on the User model. The update() method takes two arguments: an object with the new values to update, and an options object that specifies the user to update.

```javascript
User.update({ name: "Jane Doe" }, { where: { id: 1 } })
  .then((result) => {
    console.log("User updated:", result[0] === 1 ? "success" : "failure");
  })
  .catch((error) => {
    console.error("Unable to update user:", error);
  });
```

In the example above, we update the name of the user with id equal to 1 to 'Jane Doe'.

![Commands image](/Articles/BackEnd/SQLite/commands3.png)

#### Delete a user

To delete a user, use the destroy() method on the User model. The destroy() method takes an options object that specifies the user to delete.

```javascript
User.destroy({ where: { id: 1 } })
  .then((result) => {
    console.log("User deleted:", result === 1 ? "success" : "failure");
  })
  .catch((error) => {
    console.error("Unable to delete user:", error);
  });
```

In the example above, we delete the user with id equal to 1.

![Commands image](/Articles/BackEnd/SQLite/commands4.png)

#### Find all users

To find all users, use the findAll() method on the User model. The findAll() method returns a Promise that resolves to an array of all the users.

```javascript
User.findAll()
  .then((users) => {
    console.log("All users:", JSON.stringify(users, null, 2));
  })
  .catch((error) => {
    console.error("Unable to find users:", error);
  });
```

In the example above, we retrieve all the users from the database and log them to the console.

![Commands image](/Articles/BackEnd/SQLite/commands5.png)

console output:

![Commands image](/Articles/BackEnd/SQLite/commands6.png)

These are just some basic Sequelize commands that you can execute on the User model. There are many other methods and options available in Sequelize, so I encourage you to read the Sequelize documentation to learn more.
