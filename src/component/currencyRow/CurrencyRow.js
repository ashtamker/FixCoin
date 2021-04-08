import React from 'react';
import './currencyrow.css';


export default function CurrencyRow() {
    return (
        <div className="main-currencyrow">
            <input type="number" className="input-currencyrow"></input>
            <select className="select-currencyrow">
                <option className="select-currencyrow" value="Btc">Btc</option>
                <option className="select-currencyrow" value="Eth">Eth</option>
                <option className="select-currencyrow" value="Bnb">Bnb</option>
                <option className="select-currencyrow" value="Xrp">Xrp</option>
                <option className="select-currencyrow" value="Ada">Ada</option>
            </select>
        </div>
    )
}





// export default function CurrencyRow(props)  {
//     const {
//         currencyOptions,
//         selectedCurrency,
//         onChangeCurrency,
//         onChangeAmount,
//         amount,
//     } = props

//     return(
//         <div className="main-currencyrow">
//             <input type="number" className="input-currencyrow" value={amount} onChange={onChangeAmount}></input>
//             <select value={selectedCurrency} onChange={onChangeCurrency} className="select-currencyrow">
//                 {currencyOptions.map(option => (
//                     <option key={option} value={option}>{option}</option>
//                 ))}
                
//             </select>
            
//         </div>
//     )

// }

