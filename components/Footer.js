import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(90deg, #FFD700 0%, #FFC300 100%)',
      color: '#333',
      padding: '2rem 0 1rem 0',
      marginTop: '2rem',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
    }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center', letterSpacing: 2 }}>
          Follow us on Social Media
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener" style={{ color: '#333', fontWeight: 600 }}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener" style={{ color: '#333', fontWeight: 600 }}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener" style={{ color: '#333', fontWeight: 600 }}>Twitter</a>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Link href="/privacy" style={{ color: '#333', fontWeight: 500 }}>Privacy</Link>
          <Link href="/disclaimer" style={{ color: '#333', fontWeight: 500 }}>Disclaimer</Link>
          <Link href="/shipping" style={{ color: '#333', fontWeight: 500 }}>Shipping</Link>
          <Link href="/return" style={{ color: '#333', fontWeight: 500 }}>Return</Link>
          <Link href="/payment" style={{ color: '#333', fontWeight: 500 }}>Payment</Link>
          <Link href="/feedback" style={{ color: '#333', fontWeight: 500 }}>Feedback</Link>
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#333', fontWeight: 400, mt: 2 }}>
          Anil Jewellery - Since 1966. Trusted for generations. We offer the finest craftsmanship and customer service in gold, silver, and diamond jewellery. Your satisfaction is our legacy.
        </Typography>
      </Box>
    </footer>
  );
}
