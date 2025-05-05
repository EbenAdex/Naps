import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favourites');
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (match) => {
    const exists = favourites.find((fav) => fav.id === match.id);
    if (exists) {
      setFavourites(favourites.filter((fav) => fav.id !== match.id));
    } else {
      setFavourites([...favourites, match]);
    }
  };

  const isFavourite = (id) => {
    return favourites.some((fav) => fav.id === id);
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);
