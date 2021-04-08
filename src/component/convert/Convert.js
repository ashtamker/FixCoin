import React from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';

const Convert = () => {
    return(
        <div>
            <h1 className="convert-title">Convert Currency</h1>
            <CurrencyRow />
            <div className="eq-currencyrow">=</div>
            <CurrencyRow />
        </div>
    )

}

export default Convert; 