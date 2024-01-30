# Emma Test

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install node_modules

First, you will need to start install the necessary packages to run this app

To install dependencies:

```bash
# using npm
npm install

# OR using Yarn
yarn
```

## Step 2: Start the Metro Server

Once yor packages have installed, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Testing the app

Now that you have successfully run the app, let's run you through it.

1. Once you've landing on the landing screen you'd be presented with 3 options, team, investors & supported banks.
2. In each screen you can view the animated scroll, to update the avatar size open the respective screens [TeamScreen](./src/screens/TeamScreen/TeamScreen.tsx), [BanksScreen](./src/screens/BanksScreen/BanksScreen.tsx) and [InvestorsScreen](./src/screens/InvestorsScreen/InvestorsScreen.tsx) and change the prop `imageWidth` to a number value

## Running tests

To run test for the app, run the following command

```bash
# using npm
npm run test

# OR using Yarn
yarn test
```