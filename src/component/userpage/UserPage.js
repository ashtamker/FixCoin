import React, {useContext, useEffect, useState} from 'react';
import './userpage.css';
import {Favorite} from '../userfav/Favorite';
import axios from 'axios';
import Coin from '../coin/Coin';




const UserPage = () => {
    const [coins, setCoins] = useState([]);
    const {watchList} = useContext(Favorite)
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
        }
        fatchData();
    },[]);

    const renderCoin = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }
        return (
            <ul className="coinlist list-group mt-2 shadow border p-2 rounded mt-2 container">
                {coins.map(coin => {
                    return <Coin  
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image} 
                    symbol={coin.symbol} 
                    volume={coin.total_volume} 
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h} 
                    marketcap={coin.market_cap} />
                })}
            </ul>
        )
    }

    return (
        <div>
            {renderCoin()}
        </div>
    )
  
}

export default UserPage;