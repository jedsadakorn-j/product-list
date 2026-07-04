import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../hooks/useProduct';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './ProductList.style';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

const ALL_CATEGORIES = 'all';

export default function ProductList({ navigation }: Props) {
  const { products, loading, refreshing, error, refresh } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => product.category)));
    return [ALL_CATEGORIES, ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

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
    <View style={styles.container}>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        onRefresh={refresh}
        refreshing={refreshing}
        ListEmptyComponent={<Text style={styles.empty}>No products found.</Text>}
      />
    </View>
  );
}
