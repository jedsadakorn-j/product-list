# product-list

A mobile app built with [Expo](https://expo.dev) (SDK 57), [React Native](https://reactnative.dev), and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org) (LTS)
- The [Expo Go](https://expo.dev/go) app on your iOS/Android device, or an iOS Simulator / Android Emulator

## Getting started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm start
```

Then scan the QR code with Expo Go, or press `i` / `a` in the terminal to open the iOS Simulator / Android Emulator.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm run ios` | Open the app in the iOS Simulator |
| `npm run android` | Open the app in the Android Emulator |
| `npm run web` | Run the app in a web browser |
| `npm run tsc` | Type-check the project with TypeScript |

## Project structure

```
.
├── App.tsx        # Root component
├── index.ts       # App entry point (registers the root component)
├── app.json       # Expo app configuration
├── tsconfig.json  # TypeScript configuration
└── assets/        # Icons and images
```

## License

See [LICENSE](LICENSE).
