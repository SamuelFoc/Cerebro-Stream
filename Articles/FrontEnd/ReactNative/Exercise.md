## Exercise

Here's a simple exercise for React Native:

1. Create a new React Native project using Expo.

2. Create a new component called Counter that displays a number and two buttons labeled "Increase" and "Decrease".

3. When the "Increase" button is pressed, the number should increase by 1. When the "Decrease" button is pressed, the number should decrease by 1.

4. The starting number should be 0.

5. Display the Counter component in the main App component.

## Solution

```jsx
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increaseCount} />
        <Button title="Decrease" onPress={decreaseCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
```

This should give you a simple app that displays a number and two buttons. When you press the buttons, the number should increase or decrease accordingly. From here, you can modify the styling and functionality of the Counter component to suit your needs.
