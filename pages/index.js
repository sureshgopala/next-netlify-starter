import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
import AutoScrollBanner from '@components/AutoScrollBanner';

export default function Home() {
  const categories = [
    { name: 'Earings', link: '/earings', image: '/earings.jpg' },
    { name: 'Necklaces', link: '/necklaces', image: '/necklace.jpg' },
    { name: 'Pendants', link: '/pendants', image: '/pendants.jpg' },
    { name: 'Bracletes', link: '/bracletes', image: '/bracelets.jpg' },
    { name: 'Mangalsutra', link: '/mangalsutra', image: '/mangalsutra.jpg' },
    { name: 'Bangles', link: '/bangles', image: '/Bangles.jpg' },
    { name: 'Rings', link: '/rings', image: '/rings.jpg' },
    { name: 'Maangtikka', link: '/maangtikka', image: '/maangtikka.jpg' },
  ];
  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#faf9f6', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>Anil Jewellery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{ flex: 1, p: { xs: 2, sm: 4 }, width: '100%', maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mt: 1, mb: 2, fontWeight: 700, color: '#bfa14a', textAlign: 'center', letterSpacing: 2, fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','), textShadow: '0 0 8px #fff8dc, 2px 2px 12px #bfa14a' }}>
          Welcome to Anil Jewel Paradise
        </Typography>
        <AutoScrollBanner />
        <Box sx={{ mt: 4, mb: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#bfa14a', textAlign: 'center', letterSpacing: 2 }}>
            Signature Heritage Jewellery
          </Typography>
          <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', display: 'flex', justifyContent: 'center' }}>
            <img src="/Hertiage.jpg" alt="Signature Heritage Jewellery" style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 32px #bfa14a' }} />
          </Box>
        </Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#bfa14a', textAlign: 'center', letterSpacing: 2 }}>
          Shop by Category
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {categories.map(cat => (
            <Card
              key={cat.name}
              component={Link}
              href={cat.link}
              sx={{
                border: '2px solid #FFD700',
                borderRadius: 2,
                boxShadow: 1,
                minHeight: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                color: '#333',
                background: '#fff',
                textDecoration: 'none',
                transition: '0.2s',
                cursor: 'pointer',
                width: '100%',
                '&:hover': {
                  background: '#FFF8DC',
                  color: '#bfa14a',
                  boxShadow: 3,
                },
              }}
            >
              {cat.image && (
                <CardMedia
                  component="img"
                  image={cat.image}
                  alt={cat.name}
                  sx={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 2, mb: 1 }}
                />
              )}
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: 'center', fontSize: '1.1rem' }}>
                  {cat.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
