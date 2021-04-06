import React from 'react';
import './coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return(
        <div className="container-coin">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coin logo"></img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
                {priceChange < 0 
                    ? 
                    (<p className="coin-percent negative">{priceChange.toFixed(2)}%</p>) 
                    :
                    (<p className="coin-percent positive">{priceChange.toFixed(2)}%</p>)}
                    <p className="marketcap">Market Cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    )
}


export default Coin;