import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from '../coin/Coin';
import './home.css';
import Pagination from '../pagination/Pagination';


const Home = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [searchCoin, setSearchCoin] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [coinPerPage] = useState(25);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchCoins = async () => {
        setLoading(true);
        const results = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
        setCoinsList(results.data);
        setLoading(false);
    }
    //     axios
    // .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    // .then(results => {
    //     setCoinsList(results.data);

    // }).catch(
    //     error => console.log(error));
        fetchCoins();
    },[]);

const onChangeSearch = e => {
    setSearchCoin(e.target.value)
}

const filterTheCoins = coinsList.filter(coin => 
   coin.name.toLowerCase().includes(searchCoin.toLowerCase()))
console.log(coinsList);

    const indexOfLastPost = currentPage * coinPerPage;
    const indexOfFirstPost = indexOfLastPost - coinPerPage;
    const currentCoins = coinsList.slice(indexOfFirstPost, indexOfLastPost).filter(coin => 
        coin.name.toLowerCase().includes(searchCoin.toLowerCase()));

    const makePage = pageNumbers => setCurrentPage(pageNumbers);


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
            
                {/* <Coin coins={currentCoins} />  */}
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
                    loading={loading}
                    /> 
                )
            })}
            <Pagination coinPerPage={coinPerPage} totalCoins={coinsList.length} makePage={makePage} />
        </div>
    )
}

export default Home;