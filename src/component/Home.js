import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
    const [coinsList, setCoinsList] = useState([]);

    useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(results => {
        setCoinsList(results.data);
        console.log(results.data);

    });
});

    return(
        <div>
            check hello?
        </div>
    )
}

export default Home;