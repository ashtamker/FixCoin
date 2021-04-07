import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinFullData from '../coinfulldata/CoinFullData';
import CoinChart from '../coinchart/CoinChart';
import axios from 'axios';

const CoinDetails = () => {
  const {id} = useParams();
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);
          const [dayInfo, weekInfo, yearInfo, detail] = await Promise.all(
              [
                axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                  }),
                  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
                    params: {
                    vs_currency: "usd",
                    days: "7",
                  },
                }),
                axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
                    params: {
                    vs_currency: "usd",
                    days: "365",
                  },
                }),
                axios.get('https://api.coingecko.com/api/v3/coins/markets/', {
                params: {
                    vs_currency: "usd",
                    ids: id,
                },
            }),
              ]);
        
          setCoinData({
            day: dayInfo.data.prices,
            week: weekInfo.data.prices,
            year: yearInfo.data.prices,
            detail: detail.data[0],
        });
        setIsLoading(false);
      };
      fetchData();
  },[]);
  
    const renderData = () => {
        if(isLoading) {
           return <div>Loading...</div>
        }
       return (
           <div className="coinlist">
                <CoinFullData />
                <CoinChart />
           </div>
       ) 
    }

  return renderData()
};


export default CoinDetails;