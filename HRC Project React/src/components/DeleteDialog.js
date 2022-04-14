import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Delete } from '../Services/Crud';
import Alerts from './Alert';

export default function DeleteDialog({ open, setOpen, selectedRowDetails }) {

    const [openal, setOpenal] = React.useState(false);

    const handleClickOpen = async () => {
        const res = await Delete(selectedRowDetails[0]);
        if (res.status === 200) {
            setOpenal(true);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenal(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'md'}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: '#283d4a', color: 'white' }}>
                    {"Delete Records ?"}
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: '#283d4a' }}>
                    <DialogContentText id="alert-dialog-description" sx={{ color: 'white' }}>
                        Are you sure you want to delete these record(s) ?
                    </DialogContentText>
                </DialogContent>

                <div style={{ backgroundColor: '#283d4a' }}>
                    <Alerts openal={openal} setOpenal={setOpenal} message={"Deletion Successful!!"} />
                </div>

                <DialogActions sx={{ backgroundColor: '#283d4a' }}>
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

                    <Button
                        variant="contained"
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
                        }}>
                        DELETE
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
