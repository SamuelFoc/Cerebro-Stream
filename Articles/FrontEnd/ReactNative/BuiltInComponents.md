## Built-In components

In this lesson, we will be exploring some of the built-in React Native components. These components are pre-built and designed to be highly customizable, making it easy to build beautiful and functional UIs.

### Text

The Text component is used to display text in your React Native app. It supports basic styling, such as font size, color, and alignment.

```jsx
import React from "react";
import { Text } from "react-native";

export default function App() {
  return <Text>Hello, World!</Text>;
}
```

![BuiltIn Component](/Articles/FrontEnd/ReactNative/builtin1.png)

### View

The View component is a container that can be used to group other components together. It can also be used to create layout structures and apply styles.

```jsx
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello, World!</Text>
      <Text>How are you doing?</Text>
    </View>
  );
}
```

![BuiltIn Component](/Articles/FrontEnd/ReactNative/builtin2.png)

### Image

The Image component is used to display images in your React Native app. It supports various image formats and can be styled to fit your UI design.

```jsx
import React from "react";
import { Image } from "react-native";

export default function App() {
  return (
    <Image
      source={{ uri: "https://picsum.photos/200/300" }}
      style={{ width: 200, height: 300 }}
    />
  );
}
```

![BuiltIn Component](/Articles/FrontEnd/ReactNative/builtin3.png)

### TextInput

The TextInput component is used to allow users to input text into your React Native app. It supports various keyboard types and can be customized with styling.

```jsx
import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </View>
  );
}
```

![BuiltIn Component](/Articles/FrontEnd/ReactNative/builtin4.png)

### TouchableOpacity

The TouchableOpacity component is used to create touchable elements in your React Native app. It supports various touch events and can be customized with styling.

```jsx
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <TouchableOpacity onPress={() => alert("Hello, World!")}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  );
}
```

![BuiltIn Component](/Articles/FrontEnd/ReactNative/builtin5.png)

These are just a few of the many built-in components in React Native. By using these components and customizing them with your own styles, you can create beautiful and functional UIs for your mobile app.
