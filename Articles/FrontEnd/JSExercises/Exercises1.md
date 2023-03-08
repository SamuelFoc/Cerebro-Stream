## Examples and exercises to accompany event handling and DOM manipulation with JavaScript

### Examples:

#### Handling a button click

```html
<button id="myButton">Click me</button>

<script>
  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    alert("Button was clicked!");
  });
</script>
```

#### Modifying the content of an element:

```html
<p id="myParagraph">This is some text.</p>

<script>
  const paragraph = document.getElementById("myParagraph");
  paragraph.innerHTML = "The text has been changed.";
</script>
```

### Exercises:

- Create a form with two input fields and a submit button. When the form is submitted, display the values of the input fields in an alert.
- Create a simple to-do list application. Use an array to store the to-do items, and use JavaScript to add and remove items from the list dynamically.

## Solutions

#### Exercise 1

```html
<form>
  <input type="text" id="input1" />
  <input type="text" id="input2" />
  <button type="submit" id="submitButton">Submit</button>
</form>

<script>
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    alert(`Input 1: ${input1}\nInput 2: ${input2}`);
  });
</script>
```

#### Exercise 2

```html
<ul id="todoList"></ul>
<input type="text" id="todoInput" />
<button id="addButton">Add</button>

<script>
  const todoList = document.getElementById("todoList");
  const todoInput = document.getElementById("todoInput");
  const addButton = document.getElementById("addButton");
  let todos = [];

  addButton.addEventListener("click", function () {
    const todo = todoInput.value;
    todos.push(todo);
    todoList.innerHTML += `<li>${todo} <button class="removeButton">Remove</button></li>`;
    todoInput.value = "";
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.className === "removeButton") {
      const todoLi = event.target.parentElement;
      const todoIndex = Array.from(todoLi.parentElement.children).indexOf(
        todoLi
      );
      todos.splice(todoIndex, 1);
      todoLi.remove();
    }
  });
</script>
```

### GitHub Repository

[Here](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/FrontEnd/JS/Exercises) you can find some additional files which could be helpful for this lesson.
