import { useCallback, useEffect, useState } from 'react';
import type { Product } from '../models/Product';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export interface UseProductResult {
  products: Product[];
  loading: boolean;
  refreshing: boolean;
  error: string | null;
  refresh: () => void;
}

export function useProduct(): UseProductResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    }
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      await fetchProducts();
      if (active) {
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [fetchProducts]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  }, [fetchProducts]);

  return { products, loading, refreshing, error, refresh };
}
