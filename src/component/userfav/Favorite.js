import React, {useState, createContext} from 'react';
import './favorite.css';


export const Favorite =  createContext();


export const FavoriteProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum"])
    
    const deleteCoin = (coin) => {
        setWatchList(
            watchList.filter((el) => {
                return el !==coin;
            })
        );
    };

    return (
        <Favorite.Provider value={{watchList, deleteCoin}}>
            {props.children}
        </Favorite.Provider>
    )
}