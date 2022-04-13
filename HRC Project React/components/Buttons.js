import * as React from 'react'
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { TextField } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import AnalyticsDialog from './AnalyticsDialog';
import AdvDialog from './AdvDialog';
import AddDialog from './AddDialog';
import EditDialog from './EditDialog';
import DeleteDialog from './DeleteDialog';
import { BasicSearch, Data } from '../Services/Crud';

export default function Buttons({ length, selectedRowDetails, setData, setSelected }) {
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [addDialogOpen, setAddDialogOpen] = React.useState(false);
    const [advSerDialogOpen, setAdvSerDialogOpen] = React.useState(false);
    const [analyticsViewDialogOpen, setAnalyticsViewDialogOpen] = React.useState(false);
    


    const showEditOption = length === 1;
    const showDeleteOption = length >= 1;


    //Reload Button
    const func = async () => {
        const res = await Data()
        const data = res.data;
        setData(data);
        setSelected([]);
    };



    const basicSearch = async (cust_number) => {
        const res = await BasicSearch(cust_number);
        const data = await res.data;
        setData(data);
    }

    return (
        <>
            <Toolbar className='tlbr'>
                <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >

                    <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} >PREDICT</Button>
                    <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} onClick={() => setAnalyticsViewDialogOpen(true)} >ANALYTIC VIEW</Button>
                    <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} onClick={() => setAdvSerDialogOpen(true)}>ADVANCE SEARCH</Button>
                    <Button><ReplayIcon sx={{ color: '#FFF' }} onClick={() => func()} /></Button>

                </ButtonGroup>

                <TextField className="searchBtn" id="custSearch" label="Search Customer ID" type="search" variant="filled" onKeyPress={(e) => {
                    if (e.key === "Enter") { basicSearch(e.target.value); }
                }} />

                <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >

                    <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} onClick={() => setAddDialogOpen(true)}>ADD</Button>
                    <Button className="button" sx={{
                        color: '#FFFFFF', width: '60mm',
                        ":disabled": {
                            color: '#a7a0a0', borderLeftColor: '#205183'
                        },
                    }} disabled={!showEditOption} onClick={() => setEditDialogOpen(true)}>EDIT</Button>
                    <Button className="button" sx={{
                        color: '#FFFFFF', width: '60mm', ":disabled": {
                            color: '#a7a0a0', borderColor: '#205183',
                        },
                    }} disabled={!showDeleteOption} onClick={() => setDeleteDialogOpen(true)}>DELETE</Button>
                </ButtonGroup>
            </Toolbar>
            <AnalyticsDialog
                open={analyticsViewDialogOpen}
                setOpen={setAnalyticsViewDialogOpen}
            />
            <AdvDialog
                open={advSerDialogOpen}
                setOpen={setAdvSerDialogOpen}
                setData={setData}
            />
            <AddDialog
                open={addDialogOpen}
                setOpen={setAddDialogOpen}
            />
            <EditDialog
                open={editDialogOpen}
                setOpen={setEditDialogOpen}
                selectedRowDetails={selectedRowDetails}
            />
            <DeleteDialog
                open={deleteDialogOpen}
                setOpen={setDeleteDialogOpen}
                selectedRowDetails={selectedRowDetails}
            />
        </>
    )
}
