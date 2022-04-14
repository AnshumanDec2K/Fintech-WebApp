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
                '#FFB0C1',
                '#99D0F5',
            ],
            hoverOffset: 4
        }]
    }
    return (
        <Pie data={data} />
    )
}

export default PieChart