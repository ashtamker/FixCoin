import React from 'react';

const AddCoin = () => {
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
    ];
    
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button">Add Coin</button>
            <div className="dropdown-menu">
                {optionalCoins.map((e) => {
                    return (
                        <a href="#" className="dropdown-item">
                            {e}
                        </a>
                    )
                })}

            </div>
        </div>
    )

}


export default AddCoin;