## SQ Lite & NodeJS Introduction

#### Overview

SQLite is a free and open-source relational database management system (RDBMS) that stores data in a self-contained, serverless, zero-configuration, and transactional SQL database engine. It is designed to be embedded into other applications as a library, making it a popular choice for mobile and desktop applications, as well as web applications that require a small and efficient database engine.

SQLite is lightweight and easy to use, with a small memory footprint and fast performance. It supports standard SQL syntax, including SELECT, INSERT, UPDATE, and DELETE statements, as well as transactions, triggers, and views. It also supports a variety of programming languages, including C, C++, Java, Python, PHP, and Node.js, among others.

One of the key benefits of SQLite is its portability. Because it is a self-contained library, it can be easily deployed on a variety of platforms, including Windows, macOS, Linux, Android, and iOS, among others. It also has a small file size, which makes it ideal for use in embedded systems and other resource-constrained environments.

Overall, SQLite is a reliable and efficient database engine that is well-suited for a wide range of applications, from simple data storage needs to complex enterprise-level solutions. Its flexibility, portability, and ease of use make it a popular choice among developers and organizations of all sizes.

#### Install the necessary packages

First, you need to initialise a project, install the sqlite3 package, which is a driver for SQLite in Node.js and install the sequelize which is the library used to cummunicate with sqlite database in NodeJS. You can do this using npm:

```console
npm init -y

npm install sqlite3 sequelize
```

#### Create a database file

Next, you need to create a database file that will hold your data. You can do this using the SQLite command-line tool or any SQLite GUI tool. For the purposes of this lesson, let's create a file called mydb.db.

![DB image](/Articles/BackEnd/SQLite/intro1.png)

#### Create a database.js file

Create a new database.js file in the root directory and require the sequelize package at the top:

```javascript
const { Sequelize } = require("sequelize");
```

#### Create a database connection

Next, you need to create a connection to your SQLite database using the Sequelize constructor:

```javascript
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydb.db",
});
```

This will create a new sequelize object that is configured to use SQLite as its database engine and the mydb.db file as its storage location.

#### Exporting the Sequelize instance

```javascript
module.exports = sequelize;
```

This line exports the sequelize instance that is configured to use SQLite as its database engine and the mydb.db file as its storage location.

#### File content

- database.js

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydb.db",
});

module.exports = sequelize;
```

#### The root directory structure:

![DB image](/Articles/BackEnd/SQLite/intro2.png)
