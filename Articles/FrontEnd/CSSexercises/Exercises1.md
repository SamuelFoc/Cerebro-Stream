## CSS examples followed by exercises

#### Example 1: Setting the Background Color of a Web Page

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            body {
                background-color: lightblue;
            }
            </style>
        </head>
        <body>
            <h1>Hello World!</h1>
            <p>This is a sample web page.</p>
        </body>
        </html>

#### Example 2: Setting the Text Color and Font of a Web Page

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            body {
                background-color: lightgray;
                color: navy;
                font-family: Arial, sans-serif;
            }
            </style>
        </head>
        <body>
            <h1>Hello World!</h1>
            <p>This is a sample web page.</p>
        </body>
        </html>

#### Example 3: Centering an Element on a Web Page

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            .center {
                margin: auto;
                width: 50%;
                border: 3px solid green;
                padding: 10px;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <div class="center">
            <h1>Hello World!</h1>
            <p>This is a sample web page.</p>
            </div>
        </body>
        </html>

#### Exercise 1

- Create a simple HTML page and style it using CSS. Change the background color, font, and text color to different values.

<div style="display: flex;justify-content: center;margin: 50px 0px">
    <img src="/Articles/FrontEnd/CSS/exercise1.png" width="80%" alt="Image vs code"/>
</div>

#### Exercise 2

- Create a navigation bar with different buttons and style it using CSS. Add a hover effect to change the background color of the buttons when the mouse is over them.

<div style="display: flex;justify-content: center;margin: 50px 0px">
    <img src="/Articles/FrontEnd/CSS/exercise2.png" width="80%" alt="Image vs code"/>
</div>

#### Exercise 3

- Create a set of div elements with different classes and styles. Use CSS to position them on the page and give them different background colors, borders, and padding.

<div style="display: flex;justify-content: center;margin: 50px 0px">
    <img src="/Articles/FrontEnd/CSS/exercise3.png" width="80%" alt="Image vs code"/>
</div>

## Solutions

#### Exercise 1

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            body {
                background-color: lightblue;
                font-family: Arial, sans-serif;
                text-align: center;
                color: white;
            }

            h1 {
                font-size: 36px;
                margin-top: 50px;
            }
            </style>
        </head>
        <body>
            <h1>Welcome to my website</h1>
        </body>
        </html>

#### Exercise 2

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            .navbar {
                display: flex;
                justify-content: space-between;
                padding: 20px;
                background-color: lightgray;
            }

            .navbar button {
                background-color: white;
                border: 1px solid gray;
                padding: 10px 20px;
                cursor: pointer;
            }

            .navbar button:hover {
                background-color: gray;
                color: white;
            }
            </style>
        </head>
        <body>
            <div class="navbar">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            </div>
        </body>
        </html>

#### Exercise 3

    <!DOCTYPE html>
    <html>
    <head>
        <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: lightgray;
            border: 2px solid gray;
            padding: 20px;
            margin: 20px;
            float: left;
        }

        .red {
            background-color: red;
        }

        .blue {
            background-color: blue;
        }

        .green {
            background-color: green;
        }
        </style>
    </head>
    <body>
        <div class="box red">Box 1</div>
        <div class="box blue">Box 2</div>
        <div class="box green">Box 3</div>
    </body>
    </html>
