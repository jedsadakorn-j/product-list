import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
  },
  category: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  price: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '800',
    color: '#2e7d32',
  },
  rating: {
    marginTop: 8,
    fontSize: 15,
    color: '#f39c12',
  },
  description: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});
