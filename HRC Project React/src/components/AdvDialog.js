import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdvSearch } from '../Services/Crud';



const AdvDialog = ({ open, setOpen, setData }) => {

  const [documentID, setDocumentID] = React.useState("");
  const [invoiceID, setInvoiceID] = React.useState("");
  const [customerNumber, setCustomerNumber] = React.useState("");
  const [businessYear, setBusinessYear] = React.useState("");



  const handleClickOpen = async () => {

    const res = await AdvSearch(documentID, invoiceID, customerNumber, businessYear);
    const data = await res.data;

    setData([data]);
    setOpen(false)

    setDocumentID("")
    setInvoiceID("")
    setCustomerNumber("")
    setBusinessYear("")

  };

  const handleClose = () => {
    setOpen(false);
    setDocumentID("")
    setInvoiceID("")
    setCustomerNumber("")
    setBusinessYear("")
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
          Advance Search
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
              rowSpacing={2}
              columnSpacing={{ md: 2 }}
              sx={{ margin: 'auto' }}

            >

              <Grid item xs="auto">
                <TextField
                  id="documen-id"
                  label="Document Id"
                  variant="filled"
                  onChange={(event) => { setDocumentID(event.target.value); }}
                  style={{ width: 400, background: "#FFFFFF", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs="auto">
                <TextField
                  id="invoice-id"
                  label="Invoice Id"
                  variant="filled"
                  onChange={(event) => { setInvoiceID(event.target.value); }}
                  style={{ width: 400, background: "#FFFFFF", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs="auto">
                <TextField
                  id="customer-number"
                  label="Customer Number"
                  variant="filled"
                  onChange={(event) => { setCustomerNumber(event.target.value); }}
                  style={{ width: 400, background: "#FFFFFF", borderRadius: "5px" }}
                />

              </Grid>
              <Grid item xs="auto">
                <TextField
                  id="business-year"
                  label="Bussiness Year"
                  variant="filled"
                  onChange={(event) => { setBusinessYear(event.target.value); }}
                  style={{ width: 400, background: "#FFFFFF", borderRadius: "5px" }}
                />
              </Grid>
            </Grid>
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
            SEARCH
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
    </>
  )
}

export default AdvDialog