import React from 'react';


const CoinFullData = ({data}) => {

    const renderData = () => {
        if(data) {
            return (
                <div className="bg-white mt-5 p-2 rounded border row">
                    <div className="col-sm">
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">Market Cap</span>
                            <span>{data.market_cap}</span>
                        </div>
                        <hr/>
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">Total Supply</span>
                            <span>{data.total_supply}</span>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">Vol</span>
                            <span>{data.total_volume}</span>
                        </div>
                        <hr/>
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">High 24H</span>
                            <span>{data.high_24h}</span>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">Supply</span>
                            <span>{data.circulating_supply}</span>
                        </div>
                        <hr/>
                        <div className="d-flex flex-column">
                            <span className="text-muted coin-data-category">Low 24H</span>
                            <span>{data.low_24h}</span>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return(
        <div>
        {renderData()}
        </div>
    )
}

export default CoinFullData;