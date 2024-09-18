'use client';

import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import { 
    TextField, 
    Button, 
    Box, 
    Typography, 
    Modal, 
    InputLabel,
    Select,
    FormControl,
    MenuItem,
    OutlinedInput,
    InputAdornment,
    Alert,
    AlertColor,
    Paper,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    TablePagination,
    TableSortLabel,
    IconButton,
    CircularProgress,
    Snackbar,
    Checkbox,
    Switch,
    Tooltip,
    Toolbar,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import axios from 'axios';
import AdminLayout from './AdminLayout'; // Adjust the path as necessary

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface Product {
    id: number;
    product_name: string;
    category_name: string;
    min_price: number;
    max_price: number;
    amount: number;
    delivery_data: string;
    description: string;
}
  
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}
  
function stableSort<T>(array: Product[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Product;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
      id: 'product_name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'category_name',
      numeric: true,
      disablePadding: false,
      label: 'Category  ',
    },
    {
      id: 'min_price',
      numeric: true,
      disablePadding: false,
      label: 'Min Price',
    },
    {
      id: 'max_price',
      numeric: true,
      disablePadding: false,
      label: 'Max Price',
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
      id: 'delivery_data',
      numeric: true,
      disablePadding: false,
      label: 'Delivery Data',
    },
];
interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler =
      (property: keyof Product) => (event: React.MouseEvent<unknown>) => {
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
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
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
interface EnhancedTableToolbarProps {
    numSelected: number;
    productDel: () => void;
}
  
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected, productDel } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
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
            Products
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={()=>{productDel()}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
}
const AdminPage = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productName, setProductName] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<string | null>(null);
    const [amount, setAmount] = useState<string | null>(null);
    const [deliveryData, setDeliveryData] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setSelectedFile(event.target.files[0]);
        }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-products`);
          setProducts(response.data[0]);
        } catch (err) {
          // setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    const handleSubmit = async () => {
        if(productName===null
            || category===null
            || minPrice===null
            || maxPrice===null
            || amount===null
            || deliveryData===null
            || description===null
            || selectedFile===null
        ){
            setAlertMessage('Please enter all.');
            setAlertSeverity('warning');
            return;
        }else{
            const formData = new FormData();
            formData.append('product_name', productName);
            formData.append('category_id', category);
            formData.append('min_price', minPrice);
            formData.append('max_price', maxPrice);
            formData.append('amount', amount);
            formData.append('delivery_data', deliveryData);
            formData.append('category_name', "asdsf");
            formData.append('description', description);
            formData.append('image_url', selectedFile);
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/products`, formData);
                setAlertMessage('Product Data Add Successfully!');
                setAlertSeverity('success');
                handleClose()
            } catch (error) {
                setAlertMessage('Error Product Add.');
                setAlertSeverity('error');
            }
        }
    };
    const getProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-products`);
        setProducts(response.data[0]);
      } catch (err) {
        // setError(err);
      } finally {
        setLoading(false);
      }
    };
    const productDel = async () => {
      selected.map((item: number) => {

        try {
          axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/products/${item}`);
          getProducts()
        } catch (error) {
          console.error(error);
        }
      });
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setProductName(null)
        setCategory(null)
        setMinPrice(null)
        setMaxPrice(null)
        setAmount(null)
        setDeliveryData(null)
        setDescription(null)
        setSelectedFile(null)
        setOpen(false)
        setAlertMessage(null);
        setAlertSeverity('success');
    };

    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>('calories');
    const [selected, setSelected] = useState<readonly number[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: string,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
        const newSelected = products.map((n) => n.id);
        setSelected(newSelected);
        return; 
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: any) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
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
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id: any) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

    const visibleRows = React.useMemo(
        () =>
        stableSort(products, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, page, rowsPerPage, products],
    );
  return (
    <AdminLayout>
      <Button variant="contained" color="success" startIcon={<AddCircleOutlineIcon />} onClick={handleOpen} style={{marginTop:"10px"}} >
            Add
        </Button>
        <Box sx={{ width: '100%' }}  >
            <Paper sx={{ width: '100%', mb: 2 }} style={{marginBottom:"100px"}}>
                <EnhancedTableToolbar 
                  numSelected={selected.length} 
                  productDel={productDel}
                />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={products.length}
                            />
                            <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, row.id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.id}
                                    selected={isItemSelected}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        inputProps={{
                                        'aria-labelledby': labelId,
                                        }}
                                    />
                                    </TableCell>
                                    <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                    >
                                    {row.product_name}
                                    </TableCell>
                                    <TableCell align="right">{row.category_name}</TableCell>
                                    <TableCell align="right">{row.min_price}</TableCell>
                                    <TableCell align="right">{row.max_price}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{row.delivery_data}</TableCell>
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
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add product
                </Typography>
                {alertMessage && (
                    <Alert severity={alertSeverity} sx={{ mt: 2 }}>
                        {alertMessage}
                    </Alert>
                )}
                <FormControl fullWidth>
                    <TextField
                        label="Produce Name"
                        style={{marginBottom:"16px"}}
                        value={productName}
                        onChange={(event) =>{setProductName(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="catetory-label">Category</InputLabel>
                    <Select
                        labelId="catetory-label"
                        id="catetory"
                        value={category}
                        label="Category"
                        style={{marginBottom:"16px"}}
                        onChange={(event) =>{setCategory(event.target.value as string);}}

                    >
                        <MenuItem value={1}>A.D.H.D.</MenuItem>
                        <MenuItem value={2}>Anti Anxiety</MenuItem>
                        <MenuItem value={3}>Men Health</MenuItem>
                        <MenuItem value={4}>Muscle Relaxant</MenuItem>
                        <MenuItem value={5}>Pain Relief</MenuItem>
                        <MenuItem value={6}>Sleeping Aids</MenuItem>
                        <MenuItem value={7}>Weight Loss</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel id="min_price">Min Price</InputLabel>
                    <OutlinedInput
                        id="min_price"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        style={{marginBottom:"16px"}}
                        label="Min Price"
                        value={minPrice}
                        onChange={(event) =>{setMinPrice(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel id="max_price">Max Price</InputLabel>
                    <OutlinedInput
                        id="max_price"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        style={{marginBottom:"16px"}}
                        label="Max Price"
                        value={maxPrice}
                        onChange={(event) =>{setMaxPrice(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth >
                    <InputLabel id="amount">Amount</InputLabel>
                    <OutlinedInput
                        id="amount"
                        style={{marginBottom:"16px"}}
                        label="Amount"
                        value={amount}
                        onChange={(event) =>{setAmount(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="Delivery Data"
                        style={{marginBottom:"16px"}}
                        value={deliveryData}
                        onChange={(event) =>{setDeliveryData(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="Description"
                        style={{marginBottom:"16px"}}
                        multiline
                        rows={4}
                        maxRows={4}
                        value={description}
                        onChange={(event) =>{setDescription(event.target.value);}}
                    />
                </FormControl>
                <FormControl fullWidth>
                <Button variant="contained" component="label" sx={{ mt: 2 }}>
                    Choose File
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {selectedFile && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                    Selected File: {selectedFile.name}
                    </Typography>
                )}
                </FormControl>
                <Button variant="contained" color="success" startIcon={<SaveIcon />} sx={{ mt: 2 }} style={{marginRight:"10px"}} onClick={handleSubmit} >
                    Save
                </Button>
                <Button type="button" variant="contained" color="primary" startIcon={<HighlightOffIcon />} sx={{ mt: 2 }} onClick={handleClose}>
                    Cancel
                </Button>
            </Box>
        </Modal>
    </AdminLayout>
  );
};

export default AdminPage;
