import React, { useEffect } from 'react';
import { Cont } from './Me.styles';

const Me = () => {
  useEffect(() => {
    console.log('Ran');
  }, []);

  return <Cont>Me ASD;LFJKAS;LDFKJAS;LDFKJA;SLDKFJA;SLDFKJAS;LDFJAS;LDKFJAS;LDKFJASL;FDK</Cont>;
};

export default Me;
