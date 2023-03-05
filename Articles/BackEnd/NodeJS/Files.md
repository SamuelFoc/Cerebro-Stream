## File system

Welcome to your fifth lesson in backend programming in Node.js without any additional libraries! In this lesson, we will cover how to read and write files.

In a real-world application, it's common to need to read data from files or write data to files. In Node.js, we can use the built-in fs module to perform file system operations.

To demonstrate this functionality, let's modify our server.js file to read data from a file and write data to a file:

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal server error");
        console.error(`File read error: ${err.message}`);
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else if (req.url === "/write") {
    const text = "Hello, world!";
    fs.writeFile("output.txt", text, (err) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal server error");
        console.error(`File write error: ${err.message}`);
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("File written");
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

In this code, we check the URL of the request and either read data from a file or write data to a file. We use the fs.readFile method to read the contents of index.html and send it as a response. We use the fs.writeFile method to write the string "Hello, world!" to output.txt.

We also handle any errors that occur during these file system operations by setting an appropriate status code and sending an error message as the response.

To test this functionality, we can visit **http://localhost:3000/** in our web browser to see the contents of index.html. We can then visit **http://localhost:3000/write** to write the string "Hello, world!" to output.txt.

Congratulations! You have successfully learned how to read and write files in Node.js.
