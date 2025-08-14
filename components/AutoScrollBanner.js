import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';

const images = ['/AutoScroll1.jpg', '/AutoScroll2.jpg', '/AutoScroll3.jpg'];

export default function AutoScrollBanner() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let direction = 1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollAmount += direction * 2;
      if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1;
      }
      scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={scrollRef}
      sx={{
        width: '100%',
        overflowX: 'hidden', // Hide horizontal scrollbar
        whiteSpace: 'nowrap',
        display: 'flex',
        bgcolor: '#fffbe6',
        borderRadius: 2,
        boxShadow: 2,
        mb: 3,
        p: 1,
        minHeight: 180,
      }}
    >
      {images.map((src, idx) => (
        <Box
          key={src}
          component="img"
          src={src}
          alt={`Banner ${idx + 1}`}
          sx={{
            height: { xs: 180, sm: 260, md: 320 },
            width: '100vw',
            maxWidth: '100vw',
            objectFit: 'cover',
            borderRadius: 2,
            mx: 0,
            boxShadow: 1,
            border: '2px solid #FFD700',
            display: 'inline-block',
          }}
        />
      ))}
    </Box>
  );
}
