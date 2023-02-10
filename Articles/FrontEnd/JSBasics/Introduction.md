## Introduction to JavaScript

In this lesson, we will introduce JavaScript, a programming language used for adding interactivity and dynamic behavior to web pages.

#### What is JavaScript

JavaScript is a `high-level`, `dynamic`, and interpreted programming language that is widely used for web development. It can be used to add interactivity, animations, and dynamic content to web pages, making them more engaging and user-friendly.

#### Variables

In JavaScript, variables are used to store values. Variables are declared using the `var` or `let` keywords, and values can be assigned to them using the assignment operator `=`.

#### Data Types

JavaScript has several data types, including:

- Number
- String
- Boolean
- Array
- Object

1.  Primitive data types:

    - String: a sequence of characters, represented by quotes (either single or double quotes). Examples: `"Hello, World!"`, `'Hello, World!'`
      Number: a numeric value. Examples: `42`, `3.14`
      Boolean: a true or false value. Examples: `true`, `false`
    - Undefined: a value that has not been assigned to a variable. Example: `undefined`
    - Null: a non-existent value. Example: `null`

2.  Object data types:

    - Object: a collection of properties, where each property has a name and a value. Example: `{ name: "John Doe", age: 30 }`
    - Array: a collection of values, indexed by numbers. Example: `[1, 2, 3, 4, 5]`
    - Function: a reusable block of code that can be executed. Example:

            function greet(name) {
            console.log("Hello, " + name + "!");
            }

3.  Special data types:

    - Symbol: a unique identifier. Example: `Symbol("Hello, World!")`
    - BigInt: a numeric value that can represent arbitrarily large integers. Example: `1n`

Note that in JavaScript, data types can be dynamically typed, meaning that the type of a variable can change during the execution of a program.

#### Operators

JavaScript has several operators, such as:

- Arithmetic operators (e.g., +, -, \*, /)
- Comparison operators (e.g., <, >, ==, !=)
- Logical operators (e.g., &&, ||)

1.  Arithmetic Operators:

    - Addition: `+`
    - Subtraction: `-`
    - Multiplication: `*`
    - Division: `/`
    - Modulus: `%`
    - Increment: `++`
    - Decrement: `--`

    Example:

        let a = 5;
        let b = 3;
        let c = a + b; // 8
        let d = a - b; // 2
        let e = a * b; // 15
        let f = a / b; // 1.67
        let g = a % b; // 2

2.  Assignment Operators:

    - Equal: `=`
    - Addition-Equal: `+=`
    - Subtraction-Equal: `-=`
    - Multiplication-Equal: `*=`
    - Division-Equal: `/=`
    - Modulus-Equal: `%=`

    Example:

        let a = 5;
        a = 3; // a is now 3
        a += 5; // a is now 8
        a -= 2; // a is now 6
        a *= 2; // a is now 12
        a /= 3; // a is now 4
        a %= 2; // a is now 0

3.  Comparison Operators:

    - Equal: `==`
    - Not Equal: `!=`
    - Strict Equal: `===`
    - Strict Not Equal: `!==`
    - Greater Than: `>`
    - Less Than: `<`
    - Greater Than or Equal: `>=`
    - Less Than or Equal: `<=`

    Example:

        let a = 5;
        let b = "5";
        let c = a == b; // true
        let d = a === b; // false
        let e = a > b; // false
        let f = a < b; // false
        let g = a >= b; // true
        let h = a <= b; // true

4.  Logical Operators:

    - And: `&&`
    - Or: `||`
    - Not: `!`

    Example:

        let a = true;
        let b = false;
        let c = a && b; // false
        let d = a || b; // true
        let e = !a; // false

5.  Conditional (Ternary) Operator:

    - Ternary: `? :`

    Example:

        let a = 5;
        let b = (a > 0) ? "Positive" : "Negative"; // "Positive"

These are some of the most commonly used JavaScript operators. There are more operators available, such as bitwise operators and string operators, which you can learn about as you continue to develop your JavaScript skills.

#### Conditional Statements

In JavaScript, conditional statements allow you to execute different code blocks based on whether a condition is true or false. For example, you can use an if statement to check if a condition is true, and execute code inside the if block if it is.

Here is an example of a conditional statement in JavaScript:

        let weather = "sunny";

        if (weather === "sunny") {
        console.log("Wear a t-shirt and sunglasses!");
        } else if (weather === "rainy") {
        console.log("Bring an umbrella and a raincoat!");
        } else {
        console.log("Wear a jacket and be prepared for any weather!");
        }

In this example, the variable weather is assigned a string value of "sunny". The if statement checks if the value of weather is equal to "sunny", and if it is, it logs the message "Wear a t-shirt and sunglasses!" to the console. If the value of weather is not equal to "sunny", the code checks if it is equal to "rainy" using the else if statement, and logs the message "Bring an umbrella and a raincoat!" if it is. If the value of weather does not match either "sunny" or "rainy", the code inside the else block will be executed, logging the message "Wear a jacket and be prepared for any weather!" to the console.

#### Functions

Functions are blocks of code that can be called repeatedly, making it easier to reuse code and write modular code. Functions can accept parameters and return values.

Here are examples of different types of function declarations in JavaScript:

- Function Declaration:

        function greet(name) {
        return "Hello, " + name;
        }

        let greeting = greet("John");
        console.log(greeting); // Output: Hello, John

- Function Expression:

        let greet = function(name) {
        return "Hello, " + name;
        };

        let greeting = greet("Jane");
        console.log(greeting); // Output: Hello, Jane

- Arrow Function:

        let greet = (name) => {
        return "Hello, " + name;
        };

        let greeting = greet("Bob");
        console.log(greeting); // Output: Hello, Bob

#### Practice

Try writing some simple JavaScript code to practice working with variables, data types, operators, conditional statements, and functions.

## Soltuion

Here is a simple JavaScript code to practice working with variables, data types, operators, conditional statements, and functions:

        // Variables
        let name = "John Doe";
        let age = 30;

        // Data Types
        let isStudent = false;
        let marks = [80, 90, 95];

        // Operators
        let totalMarks = marks[0] + marks[1] + marks[2];
        let average = totalMarks / marks.length;

        // Conditional Statements
        if (average >= 80) {
        console.log(name + " has passed the exam with distinction.");
        } else if (average >= 60) {
        console.log(name + " has passed the exam.");
        } else {
        console.log(name + " has failed the exam.");
        }

        // Functions
        function calculatePercentage(totalMarks, maxMarks) {
        return (totalMarks / maxMarks) * 100;
        }

        let percentage = calculatePercentage(totalMarks, 300);
        console.log(name + " has scored " + percentage + "% in the exam.");

In this code, we first define some variables to store data, such as the name and age of a person. Then, we define some data types, such as a boolean value to represent if the person is a student, and an array to store the marks of a student in 3 subjects.

We then perform some operations on the data, such as calculating the total marks and average marks of the student.

Next, we use a conditional statement to determine if the student has passed or failed the exam based on their average marks.

Finally, we define a function calculatePercentage to calculate the percentage of marks obtained by the student. We call this function and log the result to the console.

In the next lesson, we will cover more advanced topics in JavaScript, such as event handling, and how to use JavaScript to manipulate the HTML DOM.
