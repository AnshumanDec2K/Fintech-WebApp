import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function Alerts({ openal, setOpenal, message }) {


    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={openal}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenal(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ width: '89%', margin: 'auto' }}
                >
                    {message}
                </Alert>
            </Collapse>

        </Box>
    );
}
