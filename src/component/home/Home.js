import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from '../coin/Coin';
import './home.css';

const Home = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [searchCoin, setSearchCoin] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [coinPerPage] = useState(10);

    useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(results => {
        setCoinsList(results.data);

    }).catch(
        error => console.log(error));
    },[]);

const onChangeSearch = e => {
    setSearchCoin(e.target.value)
}

const filterTheCoins = coinsList.filter(coin => 
   coin.name.toLowerCase().includes(searchCoin.toLowerCase()))
console.log(coinsList);

const indexOfLastPost = currentPage * coinPerPage;
const indexOfFirstPost = indexOfLastPost - coinPerPage;
const currentCoins = coinsList.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <div className="coin-app">
            <div>
                <h1 className="title">FixCoin</h1>
                <h2 className="coin-text">Search a coins</h2>
                <form>
                    <input type="text" placeholder="Bitcoin" className="coin-input" onChange={onChangeSearch}></input> 

                </form>
                <br/>
                <h3>Top coins </h3>
            </div>
                {/* <Coin coins={currentCoins} /> try pagination */}
            {filterTheCoins.map(coin => {
                return( 
                   <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image} 
                    symbol={coin.symbol} 
                    volume={coin.total_volume} 
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h} 
                    marketcap={coin.market_cap}
                    /> 
                )
            })}
        </div>
    )
}

export default Home;