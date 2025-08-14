import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import { useState, useEffect, useRef } from 'react';
import Header from '@components/Header';

function BillingPage() {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState(null);
  const inputRef = useRef(null);

  // Automatically focus the input for barcode scanning
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Listen for barcode scan (Enter key triggers fetch)
  const handleBarcodeInput = (e) => {
    setBarcode(e.target.value);
    if (e.key === 'Enter' && e.target.value) {
      fetchProductDetails(e.target.value);
    }
  };

  // Dummy fetch function (replace with real API call)
  const fetchProductDetails = (code) => {
    // Simulate fetch
    setProduct({
      name: 'Gold Necklace',
      manufacturingDate: '2025-07-01',
      price: '₹ 1,20,000',
      wastage: '5%',
      making: '₹ 10,000',
      availability: 'In Stock',
      barcode: code,
    });
  };

  // Print PDF function
  const handlePrint = () => {
    const win = window.open('', 'Print', 'width=800,height=600');
    win.document.write(`
      <html>
        <head>
          <title>Product Details</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; }
            table { width: 100%; border-collapse: collapse; margin-top: 24px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background: #FFD700; color: #333; }
          </style>
        </head>
        <body>
          <h2>Product Details</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Manufacturing Date</th>
              <th>Product Price</th>
              <th>Wastage</th>
              <th>Making</th>
              <th>Availability</th>
            </tr>
            <tr>
              <td>${product.name}</td>
              <td>${product.manufacturingDate}</td>
              <td>${product.price}</td>
              <td>${product.wastage}</td>
              <td>${product.making}</td>
              <td>${product.availability}</td>
            </tr>
          </table>
        </body>
      </html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#faf9f6', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1, p: { xs: 2, sm: 4 }, width: '100%', maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#bfa14a', textAlign: 'center' }}>
          Billing
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <TextField
            label="Bar Code Number"
            variant="outlined"
            value={barcode}
            inputRef={inputRef}
            onChange={e => setBarcode(e.target.value)}
            onKeyDown={handleBarcodeInput}
            sx={{ mb: 2, width: 240 }}
          />
          {/* Scanner facility placeholder */}
          <Button variant="contained" color="warning" sx={{ width: { xs: '100%', sm: '200px' } }} onClick={fetchProductDetails}>
            Fetch
          </Button>
        </Box>
        {product && (
          <TableContainer component={Paper} sx={{ mt: 2, width: '100%' }}>
            <Table sx={{ minWidth: 650, width: '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell><b>Product Name</b></TableCell>
                  <TableCell><b>Manufacturing Date</b></TableCell>
                  <TableCell><b>Product Price</b></TableCell>
                  <TableCell><b>Wastage</b></TableCell>
                  <TableCell><b>Making</b></TableCell>
                  <TableCell><b>Availability</b></TableCell>
                  <TableCell><b>Print</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.manufacturingDate}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.wastage}</TableCell>
                  <TableCell>{product.making}</TableCell>
                  <TableCell>{product.availability}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={handlePrint}>
                      <PrintIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}

export default BillingPage;
