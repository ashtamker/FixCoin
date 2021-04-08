import React from 'react';
import './currencyrow.css';

const CurrencyRow = () => {
    return(
        <div className="main-currencyrow">
            <input type="number" className="input-currencyrow"></input>
            <select className="select-currencyrow">
                <option value="Btc">Btc</option>
            </select>
            
        </div>
    )

}

export default CurrencyRow; 