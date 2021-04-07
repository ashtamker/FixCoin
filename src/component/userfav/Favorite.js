import React, {useState, createContext, useContext, useEffect} from 'react';
import './favorite.css';


export const Favorite =  createContext();


export const FavoriteProvider = (props) => {
    const [watchList, setWatchList] = useState(
      localStorage.getItem("myList").split(",") || ["bitcoin", "ethereum", "qtum"]);
    
    useEffect(() => {
        localStorage.setItem("myList", watchList);
    },[watchList])

    const deleteCoin = (coin) => {
        setWatchList(
            watchList.filter((el) => {
                return el !==coin;
            })
        );
    };

    const addCoin = coin => {
        if(watchList.indexOf(coin) === -1) {
            setWatchList([...watchList, coin])
        }
    }

    return (
        <Favorite.Provider value={{watchList, deleteCoin, addCoin}}>
            {props.children}
        </Favorite.Provider>
    )
}