import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect, useRef } from 'react';

const images = ['/AutoScroll1.jpg', '/AutoScroll2.jpg', '/AutoScroll3.jpg'];

export default function AutoScrollBanner() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds per image

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll logic
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, AUTO_SCROLL_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 0,
        p: 0,
        minHeight: 0,
        bgcolor: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
      }}
    >
      <IconButton
        aria-label="previous"
        onClick={prevImage}
        sx={{
          position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
          bgcolor: 'transparent', border: 'none', boxShadow: 'none', p: 0,
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: '#bfa14a', fontSize: { xs: 40, sm: 56 }, opacity: 0.8 }} />
      </IconButton>
      <Box
        component="img"
        src={images[current]}
        alt={`Banner ${current + 1}`}
        sx={{
          height: { xs: 'calc(100vw * 0.35)', sm: 'calc(100vw * 0.35)', md: 'calc(100vw * 0.35)' },
          width: { xs: 'calc(100vw - 10rem)', sm: 'calc(100vw - 10rem)', md: 'calc(100vw - 10rem)' },
          minWidth: { xs: 'calc(100vw - 10rem)', sm: 'calc(100vw - 10rem)', md: 'calc(100vw - 10rem)' },
          maxWidth: { xs: 'calc(100vw - 10rem)', sm: 'calc(100vw - 10rem)', md: 'calc(100vw - 10rem)' },
          objectFit: 'contain',
          borderRadius: 0,
          boxShadow: 'none',
          border: 'none',
          display: 'block',
          mt: -2,
          mx: '5rem',
          background: 'transparent',
        }}
      />
      <IconButton
        aria-label="next"
        onClick={nextImage}
        sx={{
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
          bgcolor: 'transparent', border: 'none', boxShadow: 'none', p: 0,
        }}
      >
        <ArrowForwardIosIcon sx={{ color: '#bfa14a', fontSize: { xs: 40, sm: 56 }, opacity: 0.8 }} />
      </IconButton>
    </Box>
  );
}
