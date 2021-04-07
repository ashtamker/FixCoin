import React, {useContext, useEffect, useState} from 'react';
import './userpage.css';
import {Favorite} from '../userfav/Favorite';
import axios from 'axios';
import UserCoin from '../userCoin/UserCoin';
import AddCoin from '../addcoin/AddCoin';





const UserPage = () => {
    const [coins, setCoins] = useState([]);
    const {watchList, deleteCoin} = useContext(Favorite)
    const [isLoading, setIsLoading] = useState(false);
    console.log(watchList);
    useEffect(() => {
        const fatchData = async () => {
            setIsLoading(true)
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","),
                },
            });
            setCoins(response.data);
            setIsLoading(false);
        };

        if(watchList.length > 0){
            fatchData();
        }
        else setCoins([]);
    },[watchList]);

    const renderCoin = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
       
        return (
           <div>
               <h1 style={{color:"#45a29e"}}> My List</h1>
               <AddCoin />
            <ul className="coinlist list-group mt-2 shadow border p-2 rounded mt-2 container">
                {coins.map(coin => {
                    return <UserCoin  
                    key={coin.id} 
                    coin={coin}
                    deleteCoin={deleteCoin} />
                })}
                
                
            </ul>
            </div>
        )
    }

    return (
        <div>
            {renderCoin()}
        </div>
    )
  
}

export default UserPage;