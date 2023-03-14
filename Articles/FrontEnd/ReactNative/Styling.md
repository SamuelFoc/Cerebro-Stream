## Styling

In this lesson, we will explore how to style React Native components. Styling is an important part of building UIs, and React Native offers several ways to apply styles to your components.

### Inline Styles

React Native uses a subset of CSS for styling, called StyleSheet. This allows you to apply inline styles to your components using JavaScript objects.

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.subtitle}>How are you doing?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
});
```

![Styling Component](/Articles/FrontEnd/ReactNative/styling1.png)

In this example, we define a StyleSheet object called styles, which contains the styles for the container, title, and subtitle components. These styles are then applied to their respective components using the style prop.

### External Stylesheets

You can also define your styles in an external stylesheet, which can be imported into your React Native app. This can be useful if you have a large number of styles or want to reuse styles across multiple components.

```jsx
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.subtitle}>How are you doing?</Text>
    </View>
  );
}
```

In this example, we define our styles in an external file called styles.js, which exports a StyleSheet object.

```js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
});
```

### Using third-party libraries

React Native offers various third-party libraries that can help you with styling your components. One such library is styled-components. This library allows you to define your styles in a more declarative and intuitive way.

```jsx
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: gray;
`;

export default function App() {
  return (
    <Container>
      <Title>Hello, World!</Title>
      <Subtitle>How are you doing?</Subtitle>
    </Container>
  );
}
```

![Styling Component](/Articles/FrontEnd/ReactNative/styling1.png)

In this example, we use styled-components to define our styles. We define three styled components - Container, Title, and Subtitle - and apply them to our components using JSX.

### Style keys

Here are some of the most commonly used style keys in React Native and examples of how they can be used:

- backgroundColor: Sets the background color of a component.
  ```jsx
  <View style={{ backgroundColor: "red" }}></View>
  ```
- color: Sets the text color of a component.

  ```jsx
  <Text style={{ color: "blue" }}>Hello, World!</Text>
  ```

- fontSize: Sets the font size of text.

  ```jsx
  <Text style={{ fontSize: 24 }}>Hello, World!</Text>
  ```

- fontWeight: Sets the font weight of text.

  ```jsx
  <Text style={{ fontWeight: "bold" }}>Hello, World!</Text>
  ```

- margin: Sets the margin around a component.

  ```jsx
  <View style={{ margin: 10 }}></View>
  ```

- padding: Sets the padding inside a component.

  ```jsx
  <View style={{ padding: 10 }}></View>
  ```

- borderWidth: Sets the width of the border around a component.

  ```jsx
  <View style={{ borderWidth: 1 }}></View>
  ```

- borderColor: Sets the color of the border around a component.

  ```jsx
  <View style={{ borderColor: "black" }}></View>
  ```

- borderRadius: Sets the radius of the corners of a component.

  ```jsx
  <View style={{ borderRadius: 5 }}></View>
  ```

- flex: Sets the flex value of a component.

  ```jsx
  <View style={{ flex: 1 }}></View>
  ```

- alignItems: Sets the alignment of child components along the cross axis.

  ```jsx
  <View style={{ alignItems: "center" }}></View>
  ```

- justifyContent: Sets the alignment of child components along the main axis.
  ```jsx
  <View style={{ justifyContent: "center" }}></View>
  ```

These are just a few examples of the many style keys available in React Native. By combining these keys in different ways, you can create a wide range of styles for your components.

### Conclusion

Styling is an important part of building UIs in React Native. By using the various styling methods available - inline styles, external stylesheets, and third-party libraries - you can create beautiful UIs.
