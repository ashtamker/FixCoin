import React from 'react';

const Coin = (name, image, symbol, price, volume) => {
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
                    <p className="coin-volume">${volume}</p>
                </div>
            </div>

        </div>
    )
}


export default Coin;