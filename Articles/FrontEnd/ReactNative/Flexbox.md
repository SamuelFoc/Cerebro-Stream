## Flexbox

React Native uses the same flexbox layout system as the web, but with a few differences. In this lesson, we'll explore how flexbox works in React Native and how you can use it to create flexible and responsive layouts.

### What is Flexbox?

Flexbox is a layout system that allows you to create flexible and responsive layouts without having to rely on fixed sizes or complicated positioning. With flexbox, you can define the size, alignment, and spacing of your elements based on their parent container.

### How Flexbox Works in React Native

In React Native, flexbox is implemented using the flex property. The flex property is a shorthand for three separate properties: flex-grow, flex-shrink, and flex-basis. Here's how each of these properties works:

- flex-grow: Specifies how much a flex item should grow relative to its siblings if there is extra space available.

- flex-shrink: Specifies how much a flex item should shrink relative to its siblings if there is not enough space available.

- flex-basis: Specifies the initial size of a flex item before any extra space is distributed.

You can set the flex property to a single value or to three separate values separated by spaces. Here are some examples:

```jsx
// Single value
<View style={{ flex: 1 }}></View>

// Three values
<View style={{ flex: "1 0 auto" }}></View>
```

In the example above, the flex property is set to 1. This means that the component will expand to fill any available space. If there are multiple components with the same flex value, they will be sized equally.

You can also set the flex-direction property to control the direction in which flex items are laid out. By default, flex items are laid out in a horizontal row. Here are some examples:

```jsx
// Row
<View style={{ flexDirection: "row" }}></View>

// Column
<View style={{ flexDirection: "column" }}></View>

// Row-reverse
<View style={{ flexDirection: "row-reverse" }}></View>

// Column-reverse
<View style={{ flexDirection: "column-reverse" }}></View>
```

By using the flex-direction property, you can create vertical layouts, horizontal layouts, or even layouts that flow in multiple directions.

### Examples

Use code below to play and get comfortable with with flexbox.

```jsx
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 250,
  },
  box: {
    borderWidth: 1,
    borderColor: "#A3A3A3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  blue: {
    backgroundColor: "#145BFF",
  },
  green: {
    backgroundColor: "#00B218",
  },
  red: {
    backgroundColor: "#FF3F3F",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.red]}>
        <Text>1</Text>
      </View>
      <View style={[styles.box, styles.green]}>
        <Text>2</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text>3</Text>
      </View>
    </View>
  );
}
```

![App image](/Articles/FrontEnd/ReactNative/flexbox1.png)

Feel free to change anything in the code above to see the impact on the App. Additionaly, here are some of the most commonly used flexbox properties in React Native, along with examples:

- flex: Sets the flex value of a component. The flex property is a shorthand for three separate properties: flex-grow, flex-shrink, and flex-basis. You can set the flex property to a single value or to three separate values separated by spaces.

  ```jsx
  <View style={{ flex: 1 }}></View>
  ```

- flexDirection: Sets the direction in which flex items are laid out. The default value is row, which means items are laid out horizontally. You can also set it to column to lay out items vertically.

  ```jsx
  <View style={{ flexDirection: "column" }}></View>
  ```

- justifyContent: Sets the alignment of child components along the main axis. The main axis is determined by the flexDirection property.

  ```jsx
  <View style={{ justifyContent: "center" }}></View>
  ```

- alignItems: Sets the alignment of child components along the cross axis. The cross axis is perpendicular to the main axis and is determined by the flexDirection property.

  ```jsx
  <View style={{ alignItems: "center" }}></View>
  ```

- alignSelf: Overrides the alignment of a single child component.

  ```jsx
  <View style={{ alignSelf: "center" }}></View>
  ```

- flexWrap: Sets whether flex items should wrap to a new line if they exceed the size of their container.

  ```jsx
  <View style={{ flexWrap: "wrap" }}></View>
  ```

- alignContent: Sets the alignment of flex lines when there is extra space in the container.

  ```jsx
  <View style={{ alignContent: "center" }}></View>
  ```

These are just a few of the many properties available in flexbox. By using these properties, you can create flexible and responsive layouts in your React Native applications.
