import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { Edit } from '../Services/Crud';
import Alerts from './Alert';

const EditDialog = ({ open, setOpen, selectedRowDetails }) => {
  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const [custPaymentTerms, setCustPaymentTerms] = React.useState("");
  const [openal, setOpenal] = React.useState(false);

  //Axios call here!!
  const handleUpdate = async () => {
    const res = await Edit(invoiceCurrency, custPaymentTerms, selectedRowDetails[0]);
    if (res.status === 200) {
      setOpenal(true);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenal(false);
    setInvoiceCurrency("");
    setCustPaymentTerms("");
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}

      >
        <DialogTitle sx={{ backgroundColor: '#283d4a', color: 'white' }}>Edit</DialogTitle>
        <DialogContent sx={{ backgroundColor: '#283d4a' }}>

          <Stack
            direction="row"
            px='30px'
            display="flex"
            justifyContent="space-between">
            <TextField
              id="invoice-currency-field"
              label="Invoice Currency"
              variant="filled"
              defaultValue={selectedRowDetails[1]}
              onChange={(event) => { setInvoiceCurrency(event.target.value); }}
              sx={{
                width: '45%',
                borderRadius: '5px',
                background: 'white',
              }}
            />
            <TextField
              id="customer-payment-terms-field"
              label="Customer Payment Terms"
              variant="filled"
              defaultValue={selectedRowDetails[2]}
              onChange={(event) => { setCustPaymentTerms(event.target.value); }}
              sx={{
                width: '45%',
                borderRadius: '5px',
                background: 'white',
              }}
            />
          </Stack>

          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >

          </Box>


        </DialogContent>

        <div style={{backgroundColor: '#283d4a'}}>
          <Alerts openal={openal} setOpenal={setOpenal} message={"Update Successful!!"} />
        </div>

        <DialogActions sx={{ backgroundColor: '#283d4a' }}>
          <Button
            variant="contained"
            onClick={handleUpdate}
            // disabled={isUpdating || !updateButtonActive}
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
            }}>
            EDIT
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
    </React.Fragment>
  );
}

export default EditDialog;
