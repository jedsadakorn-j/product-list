# product-list

A mobile app built with [Expo](https://expo.dev) (SDK 57), [React Native](https://reactnative.dev), and TypeScript. It lists products from a public API, lets you view details, filter by category, and save favorites.

## Features

- **Product list** — fetches products and renders them in a `FlatList` with pull-to-refresh.
- **Product detail** — tap a product to open a detail screen (title, image, price, rating, description) via a native stack navigator.
- **Favorites** — tap the heart on any product to favorite it; favorites are stored with AsyncStorage and persist across restarts.
- **Category filter** — filter the list by category using a horizontal row of filter chips.

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
├── App.tsx                # Root: providers + navigation stack
├── index.ts               # App entry point (registers the root component)
├── src/
│   ├── models/
│   │   └── Product.ts               # Product data model (fakestoreapi shape)
│   ├── hooks/
│   │   └── useProduct.ts            # Fetch + refresh logic for products
│   ├── context/
│   │   └── FavoritesContext.tsx     # Favorites state, persisted with AsyncStorage
│   ├── navigation/
│   │   └── types.ts                 # Stack navigator param list types
│   ├── pages/
│   │   ├── ProductList/
│   │   │   ├── ProductList.tsx      # List screen: filter + FlatList
│   │   │   └── ProductList.style.ts
│   │   └── ProductDetail/
│   │       ├── ProductDetail.tsx    # Detail screen for a single product
│   │       └── ProductDetail.style.ts
│   └── components/
│       ├── ProductCard/
│       │   ├── ProductCard.tsx      # Product row with image, info, favorite heart
│       │   └── ProductCard.style.ts
│       └── CategoryFilter/
│           ├── CategoryFilter.tsx   # Horizontal category filter chips
│           └── CategoryFilter.style.ts
├── app.json               # Expo app configuration
├── tsconfig.json          # TypeScript configuration
└── assets/                # Icons and images
```

## Data source

Products are fetched from the [Fake Store API](https://fakestoreapi.com/products).

## Key dependencies

- [`@react-navigation/native`](https://reactnavigation.org) + `@react-navigation/native-stack` — screen navigation
- [`@react-native-async-storage/async-storage`](https://react-native-async-storage.github.io/async-storage/) — persisting favorites
- [`@expo/vector-icons`](https://icons.expo.fyi) — the favorite heart icon
- `react-native-safe-area-context` / `react-native-screens` — navigation dependencies

## License

See [LICENSE](LICENSE).
