import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { Data } from '../Services/Crud';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import LinearIndeterminate from './Progress';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [

  {
    id: 'sl_no',
    numeric: true,
    disablePadding: false,
    label: 'Sl No.',
  },
  {
    id: 'business_code',
    numeric: false,
    disablePadding: true,
    label: 'Business Code',
  },
  {
    id: 'cust_number',
    numeric: true,
    disablePadding: false,
    label: 'Customer Number',
  },
  {
    id: 'clear_date',
    numeric: false,
    disablePadding: true,
    label: 'Clear Date',
  },
  {
    id: 'business_year',
    numeric: true,
    disablePadding: false,
    label: 'Business Year',
  },
  {
    id: 'doc_id',
    numeric: true,
    disablePadding: false,
    label: 'Document ID',
  },
  {
    id: 'posting_date',
    numeric: false,
    disablePadding: true,
    label: 'Posting Date',
  },
  {
    id: 'document_create_date',
    numeric: false,
    disablePadding: true,
    label: 'Document Create Date',
  },
  {
    id: 'due_in_date',
    numeric: false,
    disablePadding: true,
    label: 'Due in Date',
  },
  {
    id: 'invoice_currency',
    numeric: false,
    disablePadding: true,
    label: 'Invoice Currency',
  },
  {
    id: 'document_type',
    numeric: false,
    disablePadding: true,
    label: 'Document Type',
  },
  {
    id: 'posting_id',
    numeric: true,
    disablePadding: false,
    label: 'Posting ID',
  },
  {
    id: 'total_open_amount',
    numeric: true,
    disablePadding: false,
    label: 'Total Open Amount',
  },
  {
    id: 'baseline_create_date',
    numeric: false,
    disablePadding: true,
    label: 'Baseline Create Date',
  },
  {
    id: 'cust_payment_terms',
    numeric: false,
    disablePadding: true,
    label: 'Customer Payment Terms',
  },
  {
    id: 'invoice_id',
    numeric: true,
    disablePadding: false,
    label: 'Invoice ID',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);

  };



  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all invoices',
            }}
            sx={{ color: '#FFF' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ color: '#FFF' }}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
        backgroundColor: '#283d4a',

      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%', color: '#FFF' }}
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >

        </Typography>
      )}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRowDetails, setSelectedRowDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      setIsLoading(true);
      const res = await Data();
      const data = res.data;
      setData(data)
      setSelected([])
      setIsLoading(false);
    };
    func()

  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    setSelectedRowDetails([]);
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.sl_no);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, sl_no) => {
    const selectedIndex = selected.indexOf(sl_no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sl_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    if (newSelected.length === 1) {
      const selectedSerial = newSelected[0];
      const row = data.filter(row => row.sl_no === selectedSerial)[0];
      setSelectedRowDetails([row.sl_no, row.invoice_currency, row.cust_payment_terms]);
    }
    else {
      setSelectedRowDetails([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (sl_no) => selected.indexOf(sl_no) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (

    <Box sx={{ width: '100%' }}>
      <Buttons length={selected.length} selectedRowDetails={selectedRowDetails} setData={setData} setSelected={setSelected} setIsLoading={setIsLoading} />
      <Paper sx={{ width: '100%', mb: 2, backgroundColor: '#283d4a' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, backgroundColor: '#283d4a' }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />

            <TableBody>

              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.sl_no);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.sl_no)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.sl_no}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          sx={{ color: '#FFF' }}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} sx={{ color: '#FFF' }} scope="row" padding="none">
                        {row.sl_no}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.business_code}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.cust_number}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.clear_date}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.business_year}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.doc_id}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.posting_date}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.document_create_date}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.due_in_date}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.invoice_currency}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.document_type}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.posting_id}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.total_open_amount}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.baseline_create_date}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.cust_payment_terms}</TableCell>
                      <TableCell align="right" sx={{ color: '#FFF' }}>{row.invoice_id}</TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {isLoading && <LinearIndeterminate />}
        <TablePagination
          sx={{ color: '#FFF' }}
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
