import { createContext, useContext, useState } from "react"; 

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);


    function AddFavorite(newFavorite) {
    // verificar se o item é repetido
    const itemRepetido = favorite.some((item) => item.id === newFavorite.id)

    // nova lista recebe lista anterior
    let list = [...favorite]

    // verificar se não é repetido, e se não for, adicionar na lista
    if (!itemRepetido) {
        list.push(newFavorite);
        return setFavorite(list);
    }

    // se for repetido ele será tirado da lista
        list = favorite.filter((fav) => fav.id !== newFavorite.id)
        return setFavorite(list) 
    }
    return {
        favorite, 
        AddFavorite
    }
}

