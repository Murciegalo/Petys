import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserPaswordStart } from '../../redux/user/user.actions.js';
import {
  Cont,
  Btn,
  FormGroup,
  FormInput,
  FormLabel,
  Formu,
  Header,
} from '../ProfileForm/profileForm.styles.js';

const PasswordForm = () => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserPaswordStart({ currentPassword, password, passwordConfirm }));
  };
  return (
    <Cont>
      <Header>Password change</Header>
      <Formu onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="password-current">Current password</FormLabel>
          <FormInput
            type="password"
            placeholder="••••••••"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
