import { styled } from '@stitches/react';

const Container = styled('aside', {
  background: '$sidebar',
  fontFamily: 'Poppins',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  position: 'fixed',
  padding: '1rem',
  bottom: 0,
  zIndex: 1,
  top: 'auto',

  '@media (min-width: 720px)': {
    width: '20rem',
    position: 'fixed',
    padding: '5.5rem 1rem',
    left: 0,
    height: '100%',
    zIndex: 1,
    top: 0,
  },
});

export { Container };
