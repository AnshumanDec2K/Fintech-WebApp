import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#2E3B55" }}>
                    <Toolbar variant="dense">

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src="abclogo.png" className="App-logo" alt="" />
                        </Typography>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pr: 34 }}>
                            <img src="highradiuslogo.png" className="App-logo" alt="" />

                        </Typography>

                    </Toolbar>

                    <div className='header-txt'>
                        <h2>Invoice List</h2>
                    </div>


                </AppBar>
            </Box>
        </>
    )
}
