import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from './styles';

const NavigationButton = ({ direction, onClick }) => {
  const buttonStyle = direction === 'left' ? styles.leftButton : styles.rightButton;

  return (
    <div style={{ ...styles.navigationButton, ...buttonStyle }}>
      <IconButton
        onClick={onClick}
        style={{
          background: 'transparent',
          padding: '16px',
          color: 'rgb(10, 11, 13)',
        }}
      >
        {direction === 'left' ? <ArrowBack /> : <ArrowForward />}
      </IconButton>
    </div>
  );
};

export default NavigationButton;
