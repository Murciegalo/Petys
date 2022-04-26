import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { grabProfile } from '../../redux/user/user.selector';
import { Cont } from './profileForm.styles.js';
// import { updateStart } from '../../redux/users/user.action';

const ProfileForm = () => {
  const profile = useSelector(grabProfile);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (profile !== null) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //multipart form data
    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('photo', document.getElementById('photo').files[0]);
    // updateStart(false, form);
  };
  return (
    <Cont>
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data" onSubmit={(e) => handleSubmit(e)}>
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            value={name}
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            value={email}
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group form__photo-upload">
          {profile?.photo ? (
            <img
              className="form__user-photo"
              src={require(`../../assets/users/${profile.photo}`)}
              alt="User"
            />
          ) : (
            <img
              className="form__user-photo"
              src={require(`../../assets/users/default.jpg`)}
              alt="User"
            />
          )}
          <label htmlFor="photo">Choose new photo</label>
          <input className="form__upload" type="file" accept="image/*" id="photo" name="photo" />
        </div>
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            Save settings
          </button>
        </div>
      </form>
    </Cont>
  );
};

export default ProfileForm;
