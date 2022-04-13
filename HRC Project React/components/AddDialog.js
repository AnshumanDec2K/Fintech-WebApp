import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Add } from '../Services/Crud';
import Alerts from './Alert';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddDialog = ({ open, setOpen }) => {

  const [businessCode, setBusinessCode] = React.useState("");
  const [customerNumber, setCustomerNumber] = React.useState("");
  const [clearDate, setClearDate] = React.useState();
  const [businessYear, setBusinessYear] = React.useState("");
  const [documentID, setDocumentID] = React.useState("");
  const [postingDate, setPostingDate] = React.useState();
  const [documentCreateDate, setDocumentCreateDate] = React.useState();
  const [dueDate, setDueDate] = React.useState();
  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const [documentType, setDocumentType] = React.useState("");
  const [postingID, setPostingID] = React.useState("");
  const [totalOpenAmount, setTotalOpenAmount] = React.useState("");
  const [baselineCreateDate, setBaselineCreateDate] = React.useState();
  const [customerPaymentTerms, setCustomerPaymentTerms] = React.useState("");
  const [invoiceID, setInvoiceID] = React.useState("");
  const [openal, setOpenal] = React.useState(false);


  const handleClickOpen = async () => {
    //JSON Creation
    const body = JSON.stringify({
      bcode: businessCode,
      cn: customerNumber,
      cdate: clearDate?.format("YYYY-MM-DD"),
      byear: businessYear,
      doc: documentID,
      pdate: postingDate?.format("YYYY-MM-DD"),
      dcd: documentCreateDate?.format("YYYY-MM-DD"),
      ddate: dueDate?.format("YYYY-MM-DD"),
      ic: invoiceCurrency,
      dtype: documentType,
      pid: postingID,
      toa: totalOpenAmount,
      bcd: baselineCreateDate?.format("YYYY-MM-DD"),
      cpt: customerPaymentTerms,
      invid: invoiceID,
    });


    const res = await Add(body);
    if (res.status === 200) {
      setOpenal(true);

    }
    setOpen(true);

    setBusinessCode("");
    setCustomerNumber("");
    setClearDate();
    setBusinessYear("");
    setDocumentID("");
    setPostingDate();
    setDocumentCreateDate();
    setDueDate();
    setInvoiceCurrency("");
    setDocumentType("");
    setPostingID("");
    setTotalOpenAmount("");
    setBaselineCreateDate();
    setCustomerPaymentTerms("");
    setInvoiceID("");

  };

  const handleClose = () => {
    setOpen(false);
    setOpenal(false);
    setBusinessCode("");
    setCustomerNumber("");
    setClearDate();
    setBusinessYear("");
    setDocumentID("");
    setPostingDate();
    setDocumentCreateDate();
    setDueDate();
    setInvoiceCurrency("");
    setDocumentType("");
    setPostingID("");
    setTotalOpenAmount("");
    setBaselineCreateDate();
    setCustomerPaymentTerms("");
    setInvoiceID("");
  };



  //   const validate = () => {
  //     let temp = {}
  //     temp.cust_number = values.cust_number ? "" : "This field is Required."
  //     temp.business_code = values.business_code ? "" : "This field is Required."
  //     temp.doc_id = values.doc_id ? "" : "This field is Required."
  //     temp.inv_cur = values.inv_cur ? "" : "This field is Required."
  //     temp.doc_type = values.doc_type ? "" : "This field is Required."
  //     temp.cpt = values.cpt ? "" : "This field is Required."
  //     temp.bus_year = values.bus_year ? "" : "This field is Required."
  //     temp.pid = values.pid ? "" : "This field is Required."
  //     temp.inv_id = values.inv_id ? "" : "This field is Required."
  //     temp.total_open_amount = values.total_open_amount ? "" : "This field is Required."

  //     setErrors({
  //         ...temp
  //     })

  //     return Object.values(temp).every(x => x == "")
  // }


  return (
    <>
      <Dialog
        open={open}
        onClose={setOpen}
        fullWidth
        maxWidth="xl"
      >
        <DialogTitle sx={{ backgroundColor: '#283d4a', color: 'white' }}>
          ADD
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
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 4, md: 3, lg: 4 }}
            >
              <Grid item xs={3}>
                <TextField
                  id="business-code"
                  label="Business Code"
                  variant="filled"
                  onChange={(event) => { setBusinessCode(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="customer-number"
                  label="Customer Number"
                  variant="filled"
                  onChange={(event) => { setCustomerNumber(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                {/* <TextField
                  id="clear-date"
                  label="Clear Date"
                  variant="filled"
                  type="date"
                  onChange={(event) => { setClearDate(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Clear Date"
                    value={clearDate}
                    inputFormat='DD/MM/YYYY'
                    onChange={(newValue) => {
                      setClearDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '300px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="business-year"
                  label="Bussiness Year"
                  variant="filled"
                  onChange={(event) => { setBusinessYear(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="documen-id"
                  label="Document Id"
                  variant="filled"
                  onChange={(event) => { setDocumentID(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                {/* <TextField
                  id="posting-date"
                  label="Posting Date"
                  variant="filled"
                  type="date"
                  onChange={(event) => { setPostingDate(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Posting Date"
                    value={postingDate}
                    inputFormat='DD/MM/YYYY'
                    onChange={(newValue) => {
                      setPostingDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '300px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                {/* <TextField
                  id="document-create-date"
                  label="Document Create Date"
                  variant="filled"
                  type="date"
                  onChange={(event) => { setDocumentCreateDate(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Document Create Date"
                    value={documentCreateDate}
                    inputFormat='DD/MM/YYYY'
                    onChange={(newValue) => {
                      setDocumentCreateDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '300px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                {/* <TextField
                  id="due-date"
                  label="Due Date"
                  variant="filled"
                  type="date"
                  onChange={(event) => { setDueDate(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Due Date"
                    value={dueDate}
                    inputFormat='DD/MM/YYYY'
                    onChange={(newValue) => {
                      setDueDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '300px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="invoice-currency"
                  label="Invoice Currency"
                  variant="filled"
                  onChange={(event) => { setInvoiceCurrency(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="document-type"
                  label="Document Type"
                  variant="filled"
                  onChange={(event) => { setDocumentType(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="posting-id"
                  label="Posting Id"
                  variant="filled"
                  onChange={(event) => { setPostingID(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="total-open-amount"
                  label="Total Open Amount"
                  variant="filled"
                  onChange={(event) => { setTotalOpenAmount(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                {/* <TextField
                  id="baseline-create-date"
                  label="Baseline Create Date"
                  variant="filled"
                  type="date"
                  onChange={(event) => { setBaselineCreateDate(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Baseline Create Date"
                    inputFormat='DD/MM/YYYY'
                    value={baselineCreateDate}
                    onChange={(newValue) => {
                      setBaselineCreateDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" style={{ width: '300px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '5px' }} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="customer-payment-terms"
                  label="Customer Payment Terms"
                  variant="filled"
                  onChange={(event) => { setCustomerPaymentTerms(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="invoice-id"
                  label="Invoice Id"
                  variant="filled"
                  onChange={(event) => { setInvoiceID(event.target.value); }}
                  style={{ width: 300, background: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        <div style={{ backgroundColor: '#283d4a' }}>
          <Alerts openal={openal} setOpenal={setOpenal} message={"Insertion Successful!!"} />
        </div>

        <DialogActions sx={{ backgroundColor: '#283d4a' }}>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              margin: "auto",
              height: "50px",
              width: "45%",
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
            ADD
          </Button>


          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              margin: "auto",
              height: "50px", width: "45%", color: 'white', fontSize: '1.1rem'
            }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>


    </>
  )
}

export default AddDialog