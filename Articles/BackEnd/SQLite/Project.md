## Project

### Task

Create a "students" database that stores information about students, including their name, age, and school they attend. Use Sequelize to define "Student" and "School" models and create a SQLite database. Then, write Node.js code to interact with the database, allowing users to add, update, and view students and schools.

Don't be afraid to use any of the previous lessons and materials to complete this task!

### Solution

1. Install the neccessary packages:

```console
    npm init -y
    npm install sqlite3 sequelize
```

2. Create a root folder structure

!["Project image"](/Articles/BackEnd/SQLite/project1.png)

3. Set up the connection to the database

- ./database.js

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydb.db",
  logging: false,
});

module.exports = sequelize;
```

4. Define the models of School and Student

- ./models/Student.js

```javascript
const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;
```

- ./models/School.js

```javascript
const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const School = sequelize.define("school", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = School;
```

5. Define the relationships between School and Student models

- ./models/index.js

```javascript
const sequelize = require("../database");

const Student = require("./Student");
const School = require("./School");

// Student Associations
Student.belongsTo(School);

// School Associations
School.hasMany(Student);

sequelize.sync();

module.exports = {
  sequelize,
  Student,
  School,
};
```

!["Project image"](/Articles/BackEnd/SQLite/project2.png)

6. Write a School controllers which will be used as an interface between DB and User.

- ./controllers/school.controller.js

```javascript
const { School, Student, sequelize } = require("../models/index");

const createSchool = async (schoolName) => {
  const school = await School.create({
    name: schoolName,
  });

  return school;
};

const addStudent = async (studentObj, schoolName) => {
  const school = await School.findOne({ where: { name: schoolName } });

  if (!school) {
    return "There is no school with that name!";
  }

  try {
    const student = await Student.create(studentObj);
    await school.addStudent(student);
    return student;
  } catch (error) {
    return "There was an error:" + error;
  }
};

const updateSchool = async (schoolName, newName) => {
  const school = await School.findOne({ where: { name: schoolName } });

  school.name = newName;

  return "Successfully updated";
};

const updateStudent = async (studentName, name = null, age = null) => {
  const student = await Student.findOne({ where: { name: studentName } });

  try {
    student.name = name ?? student.name;
    student.age = age ?? student.age;
  } catch (error) {
    return "There was an error:" + error;
  }

  return "Successfully updated";
};

const getOneStudent = async (studentName) => {
  const student = await Student.findOne({ where: { name: studentName } });

  return student;
};

const getAllStudentsOf = async (schoolName) => {
  const school = await School.findOne({ where: { name: schoolName } });
  const students = await school.getStudents();

  return students;
};

module.exports = {
  createSchool,
  addStudent,
  updateSchool,
  updateStudent,
  getOneStudent,
  getAllStudentsOf,
};
```

!["Project image"](/Articles/BackEnd/SQLite/project3.png)

7. Test created models and controllers

- ./index.js

```javascript
const controller = require("./controllers/school.controller");
const sequelize = require("./database");

sequelize.sync().then(async () => {
  // Create a new School
  const school = await controller.createSchool((schoolName = "MathSchool"));
  console.log("You just created a school: " + JSON.stringify(school));

  // Create a few students
  const student1 = await controller.addStudent(
    {
      name: "Junior",
      age: 17,
    },
    "MathSchool"
  );
  console.log("You just added student: " + JSON.stringify(student1));

  const student2 = await controller.addStudent(
    {
      name: "Senior",
      age: 37,
    },
    "MathSchool"
  );
  console.log("You just added student: " + JSON.stringify(student2));

  // Get all student of the school to check if they were added
  const students = await controller.getAllStudentsOf("MathSchool");
  console.log(
    "These are students of your new school: " + JSON.stringify(students)
  );
});
```

8. Run the index.js

```console
node index.js
```

#### Console output

!["Project image"](/Articles/BackEnd/SQLite/project4.png)

### GitHub Repository

[Link to repository](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/BackEnd/SQLite/Project)
