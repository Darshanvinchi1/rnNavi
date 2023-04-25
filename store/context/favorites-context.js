import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});


const FavoritesContextProvider = ({children}) => {
   

    const [favoritesMealIds, setFavoritesMealIds] = useState([]);

    const addFavorite = async (id) => {
        setFavoritesMealIds((prevIds) => [...prevIds,id])
    }

    const removeFavorite = (id) => {
        setFavoritesMealIds((prevIds) => prevIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
