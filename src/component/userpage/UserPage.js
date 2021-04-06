import React, {useContext, useEffect, useState} from 'react';
import apicoin from '../api/apicoin';
import {Favorite} from '../userfav/Favorite';
import axios from 'axios';



const UserPage = () => {
    const [coins, setCoins] = useState([]);
    const {watchList} = useContext(Favorite)
    console.log(watchList);
    useEffect(() => {
        const fatchData = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin",
                },

            });
            console.log(response.data);
        }
        fatchData();
    },[]);

    return (
        <div>

        </div>
    )
  
}

export default UserPage;