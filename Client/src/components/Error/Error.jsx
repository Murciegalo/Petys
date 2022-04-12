import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TypeBtn } from '../Button/Button';

export const Error = () => {
  const navigate = useNavigate();
  const styles = {
    textAlign: 'center',
    fontWeight: 400,
    color: 'white',
    fontSize: '30px',
  };
  const divS = {
    textAlign: 'center',
    padding: '6%',
  };
  return (
    <div style={divS}>
      <h2 style={styles}>Hi!, please go back to our home page while we fix this mess!! xD</h2>
      <h3 style={styles}>Thanks</h3>
      <Button btnType={TypeBtn.nav} onClick={() => navigate('/')}>
        Back Home
      </Button>
    </div>
  );
};
