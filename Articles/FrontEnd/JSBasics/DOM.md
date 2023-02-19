## Event Handling and DOM Manipulation with JavaScript

In this lesson, we will cover two important topics in JavaScript: **event handling** and **DOM manipulation**.

### Event Handling

JavaScript allows you to handle events, such as a button click, a form submission, or a page load. You can add event handlers to elements using the addEventListener method, which takes the event type and a callback function as arguments.

### DOM Manipulation

The **Document Object Model** (DOM) is a tree-like structure that represents the structure of a web page. JavaScript allows you to access and modify the elements in the DOM, making it possible to change the content, style, and layout of a web page dynamically.

### DOM Traversal

In order to manipulate elements in the DOM, you need to be able to locate them. You can use methods such as **getElementById**, **getElementsByTagName**, and **querySelector** to select elements in the DOM.

### DOM Modification

Once you have selected an element in the DOM, you can use properties such as **innerHTML**, **style**, and **classList** to modify its **content**, **style**, and **class**.

### Practice

Try creating a simple web page and adding interactivity using event handling and DOM manipulation with JavaScript.

## Solution

Here is an example of a simple web page with interactivity added using event handling and DOM manipulation with JavaScript:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Web Page with Interactivity</title>
  </head>
  <body>
    <h1 id="title">Hello, World!</h1>
    <button id="change-title-btn">Change Title</button>
    <script>
      // Event Handling
      document
        .getElementById("change-title-btn")
        .addEventListener("click", function () {
          // DOM Manipulation
          let title = document.getElementById("title");
          title.innerHTML = "Title Changed";
        });
    </script>
  </body>
</html>
```

In this code, we first have a simple HTML page with a title "Hello, World!" and a button with an id "change-title-btn".

Then, using JavaScript, we add an event listener to the button element to listen for a click event. When the button is clicked, the function inside the event listener is triggered, and it performs DOM manipulation.

In this case, the function retrieves the title element using its id, and changes its inner HTML to "Title Changed".

Now, when the user loads this web page in a browser and clicks the button, the title will change from "Hello, World!" to "Title Changed".

In the next lesson, we will cover how to use JavaScript to make HTTP requests and work with APIs to retrieve and update data.
