## Express Server

Setting up an Express server

To set up an Express server, we first need to install the express package using npm:

```bash
npm install express
```

Once we have installed Express, we can create a new server by creating an instance of the express module and using its listen method to start listening for incoming requests:

```javascript
const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

This code creates a new Express server instance, sets the port variable to 3000, and starts the server listening on that port.
