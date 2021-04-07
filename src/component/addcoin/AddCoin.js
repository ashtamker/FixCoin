import React, { useState, useContext } from 'react';
import { Favorite } from '../userfav/Favorite';
import './addcoin.css';

const AddCoin = ({key}) => {
    const [isActive, setIsActive] = useState(false);
    const {addCoin} = useContext(Favorite);
    const optionalCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "litecoin",
        "cardano",
        "the-graph",
        "holotoken",
        "polkadot",
        "binancecoin",
        "uniswap",
        "chainlink",
        "qtum",
    ];

    const onCoinClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };
    
    return (
        <div className="dropdown">
            <button onClick={() => setIsActive(!isActive)} 
            className="btn btn-primary dropdown-toggle btn-pos" type="button">Add Coin</button>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"} >
                {optionalCoins.map((e) => {
                    return (
                        <a onClick={() => onCoinClick(e)} href="#" className="dropdown-item">
                            {e}
                        </a>
                    )
                })}

            </div>
        </div>
    )

}


export default AddCoin;