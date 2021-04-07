import React, { useRef, useEffect } from 'react';
import Chart from "chart.js";

export const CoinChart = () => {
    const myRef = useRef();
    useEffect(() => {
        if(myRef && myRef.current){
            const chart = new Chart(myRef.current, {
                type: 'line',
    data: {
        datasets: [
            {
            label: '# of Votes',
            data: [
                {x: 1, y: 15},
                {x: 2, y: 9},
                {x: 3, y: 21},
            ],
          
          
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
            })
        } 
    })
    return(
        <div>
            <canvas ref={myRef} id="mychart" width={250} height={250}></canvas> 
            
        </div>
    ) 
};

export default CoinChart;