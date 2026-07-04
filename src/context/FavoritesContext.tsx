import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

const STORAGE_KEY = '@product-list/favorites';

interface FavoritesContextValue {
  favoriteIds: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load persisted favorites once on mount.
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setFavoriteIds(JSON.parse(stored) as number[]);
        }
      } catch {
        // Ignore read errors and start with an empty list.
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // Persist whenever favorites change (skip the initial load).
  useEffect(() => {
    if (!loaded) {
      return;
    }
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds)).catch(() => {
      // Ignore write errors.
    });
  }, [favoriteIds, loaded]);

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    (id: number) => favoriteIds.includes(id),
    [favoriteIds]
  );

  return (
    <FavoritesContext.Provider value={{ favoriteIds, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
