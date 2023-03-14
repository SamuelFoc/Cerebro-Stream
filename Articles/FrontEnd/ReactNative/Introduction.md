## React Native Introduction

Welcome to your first lesson of React Native and Expo!

React Native is a popular framework for building native mobile applications using JavaScript and React. Expo is a set of tools and services for building and deploying React Native apps. In this lesson, we will cover the basics of React Native and Expo, and how to set up your development environment.

### Getting Started

Before we dive into coding, we need to make sure that our development environment is set up correctly. To get started with React Native and Expo, you will need to have the following installed on your computer:

- Node.js (version 12 or newer)
- NPM (Node Package Manager)
- Expo CLI (Expo Command Line Interface)
- Android Studio (for building Android apps)
- Xcode (for building iOS apps)

Once you have these installed, you can proceed with the following steps:

Open up your terminal and create a new Expo project using the following command:

```sql
expo init MyApp
```

This will create a new project named "MyApp" in a directory of the same name. Choose a template for your project. You can choose a blank template, or a pre-built template with some pre-configured components and styles.

#### Navigate into the new project directory:

```bash
cd MyApp
```

```sql
npm start
```

This will start the Expo development server, which is responsible for building and bundling your JavaScript code. If you already started the App you can just click to the console and press **a** to open your app preview in the Android Emulator.

#### Another way to run the app on an emulator or device:

- For iOS:

  ```sql
  expo start --ios
  ```

- For Android:

  ```sql
  expo start --android
  ```

If you have set up your environment correctly, you should see the app running on your emulator or device.

### View

Image below shows the emulator running template app.

![Mobile Emulator](/Articles/FrontEnd/ReactNative/intro1.png)
