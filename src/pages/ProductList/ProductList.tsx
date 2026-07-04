import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../hooks/useProduct';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './ProductList.style';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

export default function ProductList({ navigation }: Props) {
  const { products, loading, refreshing, error, refresh } = useProduct();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('ProductDetail', { product: item })}
        />
      )}
      contentContainerStyle={styles.list}
      onRefresh={refresh}
      refreshing={refreshing}
    />
  );
}
