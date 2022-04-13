import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ currency }) {
    const invoiceCounts = currency.map(cur => cur.invoiceCount);
    const currencies = currency.map(cur => cur.currency);
    const data = {
        labels: currencies,
        datasets: [{
            label: 'My First Dataset',
            data: invoiceCounts,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
    return (
        <Pie data={data} />
    )
}

export default PieChart