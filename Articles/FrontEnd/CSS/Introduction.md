## Introduction to CSS

CSS (Cascading Style Sheets) is used to style HTML pages. With CSS, you can control the layout, colors, fonts, and other visual elements of a web page. In this lesson, we will cover the basics of CSS.

### CSS Syntax

CSS is added to a HTML page using the &lt;style&gt; element, which is placed inside the &lt;head&gt; of the HTML document. The CSS code is written using a series of rules, each consisting of a selector and a declaration block. For example:

```css
    h1 {
        color: red;
    }
```

In this example, the selector h1 selects the &lt;h1&gt; element, and the declaration block specifies the color property with a value of red.

![CSS image](/Articles/FrontEnd/CSS/intro1.png "CSS introduction")

### CSS Selectors

CSS selectors are used to select elements on a HTML page. There are several different types of selectors, including:

- **Element** Selectors: Select elements by their tag name, such as h1 or p.
- **Class** Selectors: Select elements by their class attribute, such as .example.
- **ID** Selectors: Select elements by their id attribute, such as #example.

![CSS image](/Articles/FrontEnd/CSS/intro2.png "CSS introduction")

![CSS image](/Articles/FrontEnd/CSS/intro3.png "CSS introduction")

### CSS Properties

CSS properties are used to control the layout, colors, fonts, and other visual elements of a web page. Some of the most commonly used CSS properties include:

- **color** for setting text color
- **background-color** for setting the background color
- **font-size** for setting the font size
- **text-align** for setting text alignment
- **margin** for setting the margin around an element
- **padding** for setting the padding within an element

Example:

```css
.class h1 {
    color: "red";
    background-color: "blue";
    font-size: 10px;
}

.classOfh1Element {
    color: "red";
    background-color: "blue";
    font-size: 10px;
}

#idOfh1Element {
    color: "red";
    background-color: "blue";
    font-size: 10px;
}
```

![CSS image](/Articles/FrontEnd/CSS/intro4.png "CSS introduction")

### Inheritance and Cascading

CSS uses a cascading system to determine which styles are applied to an element. When multiple styles are defined for the same element, the styles that are lower in the source code will override the styles that are higher. Additionally, styles can be inherited from parent elements to child elements.

![CSS image](/Articles/FrontEnd/CSS/intro5.png "CSS introduction")

![CSS image](/Articles/FrontEnd/CSS/intro6.png "CSS introduction")

### Practice

Try styling a simple HTML page using CSS. Experiment with different selectors, properties, and values to see how they affect the appearance of the page.

In the next lesson, we will cover more advanced CSS topics, such as layout and responsive design.
