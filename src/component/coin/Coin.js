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


//  pagination options
// const Coin = ({coins}) => {
//     return (
//         <div className="container-coin">
//             {coins.map(c => {
//             <div className="coin-row">
//                 <div className="coin">
//                     <img src={c.image} alt="coin logo"></img>
//                     <h1>{c.name}</h1>
//                     <p className="coin-symbol">{c.symbol}</p>
//                 </div>
//                 <div className="coin-data">
//                     <p className="coin-price">${c.price}</p>
//                     <p className="coin-volume">${c.volume}</p>
//                 </div>
                
//                 {c.priceChange < 0 ? 
//                     (<p className="coin-percent negative">{c.priceChange}%</p>)
//                     :
//                     (<p className="coin-percent positive">{c.priceChange}%</p>)}
                
//                     <p className="marketcap">Market Cap: ${c.marketcap}</p>
//                     </div>
//                 })
//                 }
            
//         </div>
        
//     )
// }

// export default Coin;