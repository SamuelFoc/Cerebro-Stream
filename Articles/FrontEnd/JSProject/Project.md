## Project

Try to create a **simple weather forecast** page using this step-by-step guide:

- Choose a free weather API of your choice, for example, OpenWeatherMap API.

- Sign up for a free API key, which is required for making API requests.

- Create a simple HTML page with a form that takes a city name as input from the user.

- Add JavaScript to your HTML page to fetch data from the weather API by sending a GET request to the API endpoint with the city name as a parameter.

- Parse the API response, extract the required data, and display the weather forecast for the next 3 days in a table or any other suitable format.

- Style the page using CSS to make it look more presentable.

- Test your code and make any necessary changes to ensure that it works as expected.

## Solution

Here's a simple HTML template for a weather forecast web page:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Weather Forecast</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Weather Forecast</h1>
    <form id="city-form">
      <label for="city-input">Enter city:</label>
      <input type="text" id="city-input" />
      <button type="submit">Submit</button>
    </form>
    <div id="forecast-container"></div>
    <script src="app.js"></script>
  </body>
</html>
```

This template includes a form for entering a city name, a container for displaying the weather forecast, and a link to a CSS file for styling the page. The template also includes a link to a JavaScript file that will handle the API requests and display the results. The id attributes in the template are used to target elements with JavaScript for event handling and DOM manipulation.

You can style the page using CSS to make it look more presentable. Here's a simple example of CSS styles that can be used with this template:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

form {
  display: inline-block;
  margin-bottom: 1em;
}

label {
  display: block;
}

input[type="text"] {
  width: 200px;
  padding: 5px;
}

button[type="submit"] {
  padding: 5px 10px;
}

table {
  margin: auto;
  text-align: left;
}

th,
td {
  padding: 5px;
}
```

This example includes styles for the form, input, button, and table elements on the page. The styles center the page, set the font family, and add some padding and margins to elements for better spacing and readability.

You can add or modify these styles to fit your specific design needs.

Here's a simple JavaScript template for making API calls using the fetch function:

```javascript
const API_URL = "https://api.open-meteo.com/v1/forecast?";

// Get all inputs and outputs
const cityForm = document.querySelector("#city-form");
const longtitude = document.querySelector("#longtitude");
const latitude = document.querySelector("#latitude");
const forecastContainer = document.querySelector("#forecast-container");

// Add event listener on submit button
cityForm.addEventListener("submit", async (event) => {
  // Prevent default behavior (refreshing the page) of the submit button
  event.preventDefault();

  // Get longtitude and latitude
  const lon = longtitude.value;
  const lat = latitude.value;

  // Fetch external API for weather data
  const response = await fetch(
    `${API_URL}latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
  );
  const data = await response.json();

  // Display forecast data using our custom function from below
  displayForecast(data);
});

function displayForecast(data) {
  const forecast = data.hourly;
  let html = "";
  for (let i = 0; i < forecast.time.length; i++) {
    html += `<div>
            <h2>${new Date(forecast.time[i]).toLocaleString()}</h2>
            <p>Temperature: ${forecast.temperature_2m[i]}</p>
            </div>`;
  }
  forecastContainer.innerHTML = html;
}
```

This template includes a constant for the **API key** and **URL**, as well as constants for the **form**, **input**, and **forecast** container elements. The template uses event handling to listen for the form submit event and make an API request for the weather forecast for the entered city. The fetch function returns a promise that resolves to the response from the API, which is then converted to JSON data using .json(). The JSON data is then passed to the displayForecast function to create HTML for the forecast and update the contents of the forecast container.

This is just a simple example and you can modify the code to fit your specific needs and the structure of the data returned by the API. You should also replace **"your-api-key"** with your actual **API key**.

### GitHub Repository

[Here](https://github.com/SamuelFoc/Cerebro-Stream-Projects/tree/main/FrontEnd/JS/Project%202) you can find some additional files which could be helpful for this lesson.
