import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import type { Product } from '../../models/Product';
import { styles } from './ProductCard.style';

type ProductCardProps = {
  product: Product;
  onPress?: () => void;
};

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

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
      <TouchableOpacity
        style={styles.heart}
        onPress={() => toggleFavorite(product.id)}
        hitSlop={8}
      >
        <Ionicons
          name={favorite ? 'heart' : 'heart-outline'}
          size={24}
          color={favorite ? '#e53935' : '#bbb'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
