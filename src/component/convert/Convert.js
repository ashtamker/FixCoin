import React, { useState, useEffect } from 'react';
import CurrencyRow from '../currencyRow/CurrencyRow';

// const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Cuniswap%2Cchainlink%2Cqtum&vs_currencies=usd';

const Convert = () => {
    

//     const [currencyOptions, setCurrencyOptions] = useState([]);
//     const [fromCurrency, setFromCurrency] = useState();
//     const [toCurrency, setToCurrency] = useState();
//     const [exchangeRate, setExchangeRate] = useState();
//     const [amount, setAmount] = useState(1);
//     const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
    
//     let toAmount, fromAmount
//   if (amountInFromCurrency) {
//     fromAmount = amount
//     toAmount = amount * exchangeRate
//   } else {
//     toAmount = amount
//     fromAmount = amount / exchangeRate
//   }

//   useEffect(() => {
//     fetch(BASE_URL)
//       .then(data => {
//         const firstCurrency = Object.keys(data.usd)[0]
//         setCurrencyOptions([data.usd, ...Object.keys(data.usd)])
//         setFromCurrency(data.usd)
//         setToCurrency(firstCurrency)
//         setExchangeRate(data.rates[firstCurrency])
//       })
//   }, [])

//   useEffect(() => {
//     if (fromCurrency != null && toCurrency != null) {
//       fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
//         .then(data => setExchangeRate(data.usd[toCurrency]))
//     }
//   }, [fromCurrency, toCurrency])

//   function handleFromAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(true)
//   }

//   function handleToAmountChange(e) {
//     setAmount(e.target.value)
//     setAmountInFromCurrency(false)
//   }


    return(
        <div>
            <h1 className="convert-title">Convert Currency</h1>
            <CurrencyRow />
            <div className="eq-currencyrow">=</div>
            <CurrencyRow />
        </div>
        // <div>
        //     <h1 className="convert-title">Convert Currency</h1>
        //     <CurrencyRow
        //       currencyOptions={currencyOptions}
        //       selectedCurrency={fromCurrency}
        //       onChangeCurrency={e => setFromCurrency(e.target.value)}
        //       onChangeAmount={handleFromAmountChange}
        //       amount={fromAmount}
        //     />
        //     <div className="eq-currencyrow">=</div>
        //     <CurrencyRow 
        //     currencyOptions={currencyOptions}
        //     selectedCurrency={toCurrency}
        //     onChangeCurrency={e => setToCurrency(e.target.value)}
        //     onChangeAmount={handleToAmountChange}
        //     amount={toAmount}
        //     />
        // </div>
    )

}

export default Convert; 