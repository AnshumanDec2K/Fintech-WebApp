import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({totalOpenAmt}) {
    const businesses = totalOpenAmt.map(toa => toa.business_name);
    const totalOpenAmounts = totalOpenAmt.map(toa => toa.total_open_amount);
    const customerCounts = totalOpenAmt.map(toa => toa.customer_count);
    const data = {
        labels: businesses,
        datasets: [{
            label: 'No of Customers',
            data: customerCounts,
            backgroundColor: [
                '#FFB0C1',
                
            ],
            hoverOffset: 4
        },
        {
            label: 'Total Open Amount',
            data: totalOpenAmounts,
            backgroundColor: [
                '#99D0F5'
            ],
            hoverOffset: 4
        }]
    }
    return (
        <Bar data={data} />
    )
}

export default BarChart