import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


// ...existing code...

function Header() {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFC300 100%)', boxShadow: 2 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img src="/logo.png!sw800" alt="Anil Jewellery Logo" style={{ height: 48, width: 48, borderRadius: '50%', objectFit: 'contain', background: '#fff' }} onError={e => { e.target.onerror = null; e.target.src = '/favicon.ico'; }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 3, mr: 2 }}>
          <MenuItem component={Link} href="/gold" sx={{ color: '#333', fontWeight: 500 }}>Gold</MenuItem>
          <MenuItem component={Link} href="/silver" sx={{ color: '#333', fontWeight: 500 }}>Silver</MenuItem>
          <MenuItem component={Link} href="/diamond" sx={{ color: '#333', fontWeight: 500 }}>Diamond</MenuItem>
          <MenuItem component={Link} href="/billing" sx={{ color: '#333', fontWeight: 500 }}>Billing</MenuItem>
        </Box>
        <IconButton color="inherit" sx={{ ml: 1 }}>
          <ShoppingCartIcon sx={{ color: '#333' }} />
        </IconButton>
        <IconButton color="inherit" sx={{ ml: 1 }}>
          <AccountCircleIcon sx={{ color: '#333' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
