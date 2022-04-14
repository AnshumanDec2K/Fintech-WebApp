import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { DialogContent } from '@mui/material';
import Chart from "chart.js/auto";
import { display } from '@mui/system';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';



export default function FullScreenDialog({ open, setOpen, currency, totalOpenAmt }) {

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>

            <Dialog
                fullScreen
                open={open}

            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar sx={{ background: '#283d4a' }}>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Analytics View
                        </Typography>
                        <IconButton

                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent sx={{ backgroundColor: '#FFF', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                    <div style={{ width: '80vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <h2>
                            Business Insights Bar chart
                        </h2>
                        <BarChart totalOpenAmt={totalOpenAmt} />
                    </div>

                    {(currency && currency.length > 0) &&

                        <div style={{ marginTop: '10vh', width: '40vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <h2>
                                Currency Insights Pie chart
                            </h2>
                            <PieChart currency={currency} />
                        </div>}


                </DialogContent>
            </Dialog>
        </div>
    );
}
