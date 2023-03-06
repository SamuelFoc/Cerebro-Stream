## Express Server

To set up an Express server, we first need to install the express package using npm:

```console
npm init -y
npm install express
```

![Intro](/Articles/BackEnd/ExpressJS/intro1.png)

Once we have installed Express, we can create a new server by creating an instance of the express module and using its listen method to start listening for incoming requests:

```javascript
const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

This code creates a new Express server instance, sets the port variable to 3000, and starts the server listening on that port (you can visit the server [here](http://localhost:3000/)).

![Intro](/Articles/BackEnd/ExpressJS/intro2.png)
