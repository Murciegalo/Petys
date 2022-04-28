import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Btn, FormGroup, FormInput, FormLabel, Formu } from '../ProfileForm/profileForm.styles.js';
import { Cont } from './passwordForm.styles.js';
// import { updateStart } from '../../redux/users/user.action';

const PasswordForm = () => {
  const navigate = useNavigate();
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // updateStart(true, { passwordCurrent, password, passwordConfirm });
    setTimeout(() => navigate('/login'), 1300);
  };
  return (
    <Cont>
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <Formu onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="password-current">Current password</FormLabel>
          <FormInput
            type="password"
            placeholder="••••••••"
            value={passwordCurrent}
            onChange={(e) => setPasswordCurrent(e.target.value)}
            required
            minLength="8"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">New password</FormLabel>
          <FormInput
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password-confirm">Confirm password</FormLabel>
          <FormInput
            type="password"
            placeholder="••••••••"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            minLength="8"
          />
        </FormGroup>
        <FormGroup>
          <Btn type="submit">Save password</Btn>
        </FormGroup>
      </Formu>
    </Cont>
  );
};

export default React.memo(PasswordForm);
