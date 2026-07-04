import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from './src/context/FavoritesContext';
import type { RootStackParamList } from './src/navigation/types';
import ProductDetail from './src/pages/ProductDetail/ProductDetail';
import ProductList from './src/pages/ProductList/ProductList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={{ title: 'Products' }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ title: 'Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}
