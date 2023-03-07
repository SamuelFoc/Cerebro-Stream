## Project

### Task

Create a simple ExpressJS app that serves different messages on different routes.

### Solution

1. Start by creating a new ExpressJS project and installing the necessary dependencies. You can use npm or yarn to install the following packages:

```console
npm init -y
npm install express
```

2. Create a new file called **app.js** and require the necessary packages:

```javascript
const express = require("express");
```

3. Initialize your Express app:

```javascript
const app = express();
```

4. Create a folder called **Routes** inside the root directory and inside the folder create following files:

   - ./Routes/index.js

   ```javascript
   const express = require("express");
   const router = express.Router();

   // Default routes on http://localhost:3000/
   router.get("/", (req, res) => {
     res.send("Hello, world!");
   });

   module.exports = router;
   ```

   - ./Routes/about.js

   ```javascript
   const express = require("express");
   const router = express.Router();

   // About routes on http://localhost:3000/about/
   router
     .get("/", (req, res) => {
       res.send("About Page!");
     })
     .get("/user/:userName", (req, res) => {
       res.send("About the user: " + req.params.userName);
     });

   module.exports = router;
   ```

   - ./Routes/contact.js

   ```javascript
   const express = require("express");
   const router = express.Router();

   // Contact routes on http://localhost:3000/contact/
   router
     .get("/", (req, res) => {
       res.send("Contact Page!");
     })
     .get("/user/:userName", (req, res) => {
       res.send("Contact to the user: " + req.params.userName);
     });

   module.exports = router;
   ```

5. Require routes

Open the app.js file and at the top of the file require the routes from the Routes folder.

```javascript
// Require Routes
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");
```

Now add following code right after Express initialization.

```javascript
// Use routes from Routes directory
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
```

6. Start your server:

Add the following code at the bottom of the app.js file.

```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
```

### GitHub Repository

[Link to repository](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/BackEnd/ExpressJS/Project)
