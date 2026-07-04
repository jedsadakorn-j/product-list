import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2e7d32',
    marginTop: 8,
  },
  heart: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
});
