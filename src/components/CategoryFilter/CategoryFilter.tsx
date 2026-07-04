import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from './CategoryFilter.style';

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => {
        const active = category === selected;
        return (
          <TouchableOpacity
            key={category}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect(category)}
            activeOpacity={0.8}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
