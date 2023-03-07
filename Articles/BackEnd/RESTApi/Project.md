## To-Do List

Build a To-Do List Application using ExpressJS, SQLite, and Sequelize.

In this task, you will be building a To-Do List application using ExpressJS, SQLite, and Sequelize. The application will allow users to create, read, update, and delete To-Do list items using RESTful API endpoints.

### Steps

1.  Set up the project:

    - Install Node.js and npm.
    - Create a new directory for the project and initialize a new npm project using npm init.
    - Install the following dependencies using npm:
      - express: for building RESTful API endpoints.
      - sqlite3: for storing data in a SQLite database.
      - sequelize: an ORM for SQLite, which will allow you to interact with the database using JavaScript.
      - body-parser: for parsing JSON data in the request body.
      - cors: for handling Cross-Origin Resource Sharing (CORS) requests.

2.  Create a database schema:

    - Define a Todo model using Sequelize with the following properties:
      - id: an auto-incrementing integer primary key.
      - title: a string representing the title of the To-Do item.
      - description: a string representing the description of the To-Do item.
      - completed: a boolean representing whether the To-Do item has been completed or not.

3.  Create API endpoints:

        - Create the following RESTful API endpoints using ExpressJS:
            - GET /api/todos: Returns a list of all To-Do items in the database.
            - POST /api/todos: Creates a new To-Do item in the database.
            - PUT /api/todos/:id: Updates a specific To-Do item in the database.
            - DELETE /api/todos/:id: Deletes a specific To-Do item from the database.

4.  Test the API:

    - Use a tool like Postman or curl to test the API endpoints.
    - Verify that the API endpoints are working as expected.

5.  Additional features (optional):

    - Add additional features to the application, such as:
      - Pagination: Limit the number of To-Do items returned in the GET /api/todos endpoint and allow users to specify a page number.
      - Filtering: Allow users to filter To-Do items by their completed status or by keyword.
      - Sorting: Allow users to sort To-Do items by various criteria, such as title or date created.

### TIP

Use ExpressJS and Sequelize documentation to help you. It is always good to learn directly from documentation.

### Slution

#### GitHub Repository

[Link to repository](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/BackEnd/RestApi/Project)
