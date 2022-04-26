import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <form className="form form-user-password" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="password-current">
            Current password
          </label>
          <input
            className="form__input"
            id="password-current"
            type="password"
            placeholder="••••••••"
            value={passwordCurrent}
            onChange={(e) => setPasswordCurrent(e.target.value)}
            required
            minLength="8"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            New password
          </label>
          <input
            className="form__input"
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label className="form__label" htmlFor="password-confirm">
            Confirm password
          </label>
          <input
            className="form__input"
            id="password-confirm"
            type="password"
            placeholder="••••••••"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            minLength="8"
          />
        </div>
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green btn--save-password">
            Save password
          </button>
        </div>
      </form>
    </Cont>
  );
};

export default React.memo(PasswordForm);
