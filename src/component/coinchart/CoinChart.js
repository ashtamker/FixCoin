import React, { useRef, useEffect } from 'react';
import {Bar} from "react-chartjs-2";
// import Chartjs from "chart.js";



export const CoinChart = () => {

    return(
        <div>
           <Bar 
           data={{ 
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of vote',
                    data: [12, 19, 3, 5, 2, 3]
                }
            ]
            }}
              height={400}
              width={600}
              options={{
                  maintainAspectRatio: false,
              }} 
              />          
        </div>
    )
}
export default CoinChart;