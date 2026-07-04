import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, Text } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './ProductDetail.style';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetail({ route }: Props) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.rating}>
        ★ {product.rating.rate} ({product.rating.count} reviews)
      </Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}
