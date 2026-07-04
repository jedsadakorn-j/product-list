import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { Product } from '../../models/Product';
import { styles } from './ProductCard.style';

type ProductCardProps = {
  product: Product;
  onPress?: () => void;
};

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
