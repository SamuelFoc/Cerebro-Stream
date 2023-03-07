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

sequelize.sync();

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

- We have defined the one-to-one relationship between **User** and **Profile** because every user can have only one profile and of course every profile can belong to only one user. Now we want to create a User named **Bob Doe** with email **bobby.doe@email.com** and assign a profile with address **Prague 123/45** and phone number **123 456 789** to him.

```javascript
const { sequelize, User, Profile } = require("./models/index");

const user1 = {
  name: "Bob Doe",
  email: "bobby.doe@email.com",
};
const profile1 = {
  address: "Prague 123/45",
  phone: "123 456 789",
};

const tryOneToOne = async () => {
  // Create user and profile
  const user = await User.create(user1);
  const profile = await Profile.create(profile1);

  // Assign the profile to the user
  const result = await user.setProfile(profile);

  console.log(result ? "Successfully assigned" : "Failed");
};

sequelize.sync().then(() => tryOneToOne());
```

#### Many-to-one relationship

- Many-to-one relationship can be found between User and Posts. Every user has many posts but any post has only one owner and thats the User.

```javascript
const { sequelize, User, Post } = require("./models/index");

const user1 = {
  name: "Alice Smith",
  email: "alice.smith@email.com",
};
const post1 = {
  title: "My first post",
  content: "Lorem ipsum dolor sit amet, consectetur adip.",
};
const post2 = {
  title: "My second post",
  content: "Lorem ipsum dolor sit amet, consectetur adip.",
};

const tryOneToMany = async () => {
  // Create User and Posts
  const user = await User.create(user1);
  const firstPost = await Post.create(post1);
  const secondPost = await Post.create(post2);

  // Assign the Posts to the User
  const result = await user.addPosts([firstPost, secondPost]);

  console.log(result ? "Successfully assigned" : "Failed");
};

sequelize.sync().then(() => tryOneToMany());
```

#### Many-to-many relationship

- The last possible type of relationship between models can be Many-to-Many. Groups and Users are in this relationship. Any User can belong to many different groups and any group can contain many users.

```javascript
const { sequelize, User, Group } = require("./models/index");

const user1 = {
  name: "Anna Smith",
  email: "anna.smith@email.com",
};
const user2 = {
  name: "John Smith",
  email: "john.smith@email.com",
};
const group1 = {
  name: "Group A",
};
const group2 = {
  name: "Group B",
};

const tryManyToMany = async () => {
  // Create Users and Groups
  const anna = await User.create(user1);
  const john = await User.create(user2);
  const groupA = await Group.create(group1);
  const groupB = await Group.create(group2);

  // Assign the Groups to the Users
  try {
    await anna.addGroup(groupA);
    await anna.addGroup(groupB);
    await john.addGroup(groupA);
  } catch (error) {
    console.log("Failed");
  }

  console.log("Succsesfully assigned");
};

sequelize.sync().then(() => tryManyToMany());
```
