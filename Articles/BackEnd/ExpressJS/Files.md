## Filesystem & ExpressJS

Here's an example of how to use ExpressJS to work with the file system:

```javascript
const express = require("express");
const fs = require("fs");
const app = express();

// Route to read a file
app.get("/file/:filename", (req, res) => {
  const { filename } = req.params;
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return res.status(500).send("Internal server error");
    }
    res.send(data.toString());
  });
});

// Route to write to a file
app.post("/file/:filename", (req, res) => {
  const { filename } = req.params;
  const body = req.body;
  fs.writeFile(filename, body, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return res.status(500).send("Internal server error");
    }
    res.send(`File ${filename} written successfully`);
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

In this code, we're using the fs module to read and write files. We define two routes: one to read a file and one to write to a file.

In the read route, we use fs.readFile() to read the contents of the file specified in the route parameter filename. If there's an error reading the file, we log an error message and send a 500 status code to the client. Otherwise, we send the file contents back to the client.

In the write route, we use fs.writeFile() to write the request body to the file specified in the route parameter filename. If there's an error writing to the file, we log an error message and send a 500 status code to the client. Otherwise, we send a success message back to the client.

Finally, we start the server listening on port 3000 using the app.listen() method. When the server starts, it logs a message to the console. Note that this is just a basic example, and you should implement proper error handling and security measures before using this in a production environment.
