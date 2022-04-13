import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FullScreenDialog from './AnalyticsView';
import { Analytics } from '../Services/Crud';


const AnalyticsDialog = ({ open, setOpen }) => {

    const [clearFrom, setClearFrom] = React.useState();
    const [clearTo, setClearTo] = React.useState();
    const [dueFrom, setDueFrom] = React.useState();
    const [dueTo, setDueTo] = React.useState();
    const [baselineFrom, setBaselineFrom] = React.useState();
    const [baselineTo, setBaselineTo] = React.useState();
    const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
    const [analyticsOpen, setAnalyticsOpen] = React.useState(false);
    const [totalOpenAmt, setTotalOpenAmt] = React.useState();
    const [currency, setCurrency] = React.useState();


    const handleClickOpen = async () => {
        
        
        const res = await Analytics(clearFrom, clearTo, dueFrom, dueTo, baselineFrom, baselineTo, invoiceCurrency);
        
        setTotalOpenAmt(res.data.totalOpenInsights);
        setCurrency(res.data.currencyCountInsights);

        
        setAnalyticsOpen(true);
        setOpen(false);


    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <>
            <Dialog
                open={open}
                onClose={setOpen}
                fullWidth
                maxWidth="md"
            >
                <DialogTitle style={{ background: "#283d4a", color: "#FFFFFF" }}>
                    Analytics View
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: '#283d4a' }}>
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1, width: "100%" },
                            flexGrow: 1,
                        }}
                        autoComplete="off"
                    >
                        <div

                        >
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <div>
                                    <h3 style={{ color: 'white', marginBottom: '2px' }}>Clear Date</h3>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="From"
                                                inputFormat='DD/MM/YYYY'
                                                value={clearFrom || null}
                                                onChange={(newValue) => {
                                                    setClearFrom(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="To"
                                                inputFormat='DD/MM/YYYY'
                                                value={clearTo || null}
                                                onChange={(newValue) => {
                                                    setClearTo(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ color: 'white', marginBottom: '2px' }}>Due Date</h3>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="From"
                                                inputFormat='DD/MM/YYYY'
                                                value={dueFrom || null}
                                                onChange={(newValue) => {
                                                    setDueFrom(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="To"
                                                inputFormat='DD/MM/YYYY'
                                                value={dueTo || null}
                                                onChange={(newValue) => {
                                                    setDueTo(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <div >
                                    <h3 style={{ color: 'white', marginBottom: '5px', marginTop: '8px' }}>Baseline Create Date</h3>
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <div>
                                                <DatePicker
                                                    label="From"
                                                    inputFormat='DD/MM/YYYY'
                                                    value={baselineFrom || null}
                                                    onChange={(newValue) => {
                                                        setBaselineFrom(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                                />
                                            </div>
                                        </LocalizationProvider>
                                    </div>
                                    <div >
                                        <LocalizationProvider dateAdapter={AdapterMoment} >
                                            <div >
                                                <DatePicker
                                                    label="To"
                                                    inputFormat='DD/MM/YYYY'
                                                    value={baselineTo || null}
                                                    onChange={(newValue) => {
                                                        setBaselineTo(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '350px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                                                />
                                            </div>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ color: 'white', marginBottom: '2px', marginTop: '8px' }}>Invoice Currency</h3>

                                    <TextField
                                        id="inv_cur"
                                        label="Invoice Currency"
                                        variant="filled"
                                        onChange={(event) => { setInvoiceCurrency(event.target.value); }}
                                        style={{ width: '350px', background: 'white', borderRadius: "5px" }}
                                    />

                                </div>
                            </div>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: '#283d4a' }}>
                    <Button
                        variant="outlined"
                        onClick={handleClickOpen}
                        sx={{
                            margin: "auto",
                            height: "50px",
                            width: "47%",
                            color: "white",
                            fontWeight: "500",
                            backgroundColor: '#14aff1',
                            fontSize: '1.1rem',
                            ":hover": {
                                color: 'white',
                                backgroundColor: '#14aff1',
                            },
                            ":disabled": {
                                color: '#9C9C9C',
                                backgroundColor: '#205D77',
                            },
                        }}
                    >
                        SUBMIT
                    </Button>


                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        sx={{
                            margin: "auto",
                            height: "50px", width: "47%", color: 'white', fontSize: '1.1rem'
                        }}
                    >
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
            <FullScreenDialog open={analyticsOpen} setOpen={setAnalyticsOpen} currency={currency} totalOpenAmt={totalOpenAmt}/>
        </>
    )
}

export default AnalyticsDialog