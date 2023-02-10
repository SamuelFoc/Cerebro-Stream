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

#### Exercise 1: Changing the Background Color of a Web Page with a Button

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            body {
                background-color: lightblue;
            }
            button {
                padding: 10px 20px;
                background-color: navy;
                color: white;
                border-radius: 5px;
                cursor: pointer;
            }
            </style>
        </head>
        <body>
            <h1>Hello World!</h1>
            <p>This is a sample web page.</p>
            <button onclick="document.body.style.backgroundColor = 'lightgray'">Change Background Color</button>
        </body>
        </html>

#### Exercise 2: Creating a Dropdown Menu with CSS

        <!DOCTYPE html>
        <html>
        <head>
            <style>
            .dropdown {
                position: relative;
                display: inline-block;
            }
            .dropdown-content {
                display: none;
                position: absolute;
                z-index: 1;
                background-color: lightgray;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                padding: 12px 16px;
            }
            .dropdown:hover .dropdown-content {
                display: block;
            }
            </style>
