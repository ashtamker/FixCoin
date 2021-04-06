import React, {useState, createContext} from 'react';
import './favorite.css';


export const Favorite =  createContext();


export const FavoriteProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum"])
    
    return (
        <Favorite.Provider value={{watchList}}>
            {props.children}
        </Favorite.Provider>
    )
}