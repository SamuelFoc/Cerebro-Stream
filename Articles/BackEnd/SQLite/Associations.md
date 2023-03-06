## Associations

Associations in databases allow you to link one table to another. In Sequelize, you can define associations between models to create these links. There are several types of associations you can use, such as one-to-one, one-to-many, and many-to-many.

#### Create few models

As first we have to create few models: User, Profile, Post and Group.

- models/User.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
```

- models/Profile.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Profile = sequelize.define("Profile", {
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
});

module.exports = Profile;
```

- models/Post.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

module.exports = Post;
```

- models/Group.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Group = sequelize.define("Group", {
  name: DataTypes.STRING,
});

module.exports = Group;
```

#### Create associations between the models

- models/index.js

```javascript
// Sequelize
const sequelize = require("../database");

// Require the models
const User = require("./User");
const Profile = require("./Profile");
const Post = require("./Post");
const Group = require("./Group");

// User associations
User.hasOne(Profile);
User.hasMany(Post);
User.belongsToMany(Group, { through: "UserGroup" });

// Profile associations
Profile.belongsTo(User);

// Post associations
Post.belongsTo(User);

// Group associations
Group.belongsToMany(User, { through: "UserGroup" });

sequelize.sync({ alter: true });

module.exports = {
  sequelize,
  User,
  Profile,
  Group,
  Post,
};
```

In this example, each model is defined in its own file and exported. The associations between models are defined in the index.js file using the imported models and their associated methods.

### Usage

To use these models in your Node.js application, you can simply import them from the models/index.js file:

#### One-to-one relationship

- Create Profile and assign it to the User

```javascript
const { sequelize, User, Profile, Post, Group } = require("./models/index");

const tryCommands = async () => {
  // Create User
  const user = await User.create({
    name: "Alice Doe",
    email: "alice.doe@gmail.com",
  });
  // Create Profile
  const profile = await Profile.create({
    address: "Prague 1234/11",
    phone: "123 456 789",
  });
  // Assign the Profile to the User
  await user.setProfile(profile);

  // Retrieve the profile from User
  const retrievedProfile = await user.getProfile();

  console.log(
    "User and profile succesfully created: ",
    retrievedProfile.dataValues
  );
};

tryCommands();
```

#### Many-to-one relationship

- Create posts and assign them to the user

```javascript
const { sequelize, User, Profile, Post, Group } = require("./models/index");

const tryCommands = async () => {
  // Create User
  const user = await User.create({
    name: "Bob Doe",
    email: "bob.doe@gmail.com",
  });
  // Create post 1
  const post1 = await Post.create({
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adip.",
  });
  // Create post 2
  const post2 = await Post.create({
    title: "Post 2",
    content: "Lorem ipsum dolor sit amet, consectetur adip.",
  });
  // Assign the Posts to the User
  await user.addPosts([post1, post2]);

  // Retrieve the profile from User
  const retrievedPosts = await user.getPosts();

  console.log("User and posts succesfully created: ", retrievedPosts);
};

tryCommands();
```

#### Many-to-many relationship

- Create a group, two users and assign them to the group

```javascript
const { sequelize, User, Profile, Post, Group } = require("./models/index");

const tryCommands = async () => {
  // First, create the users
  const user1 = await User.create({
    name: "John Doe2",
    email: "john.doe@example.com",
  });
  const user2 = await User.create({
    name: "Jane Doe2",
    email: "jane.doe@example.com",
  });
  //Next, create the new group
  const newGroup = await Group.create({ name: "ASDASDASD" });
  // Finally, add the users to the group
  await newGroup.addUser(user1);
  await newGroup.addUser(user2);
  // Retrieve the profile from User
  const retrievedUsers = await newGroup.getUsers();
  console.log("Users and group succesfully created: ", retrievedUsers);
};

sequelize.sync().then(() => tryCommands());
```
