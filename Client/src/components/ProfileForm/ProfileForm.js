import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { grabProfile } from '../../redux/user/user.selector';
import {
  Btn,
  Cont,
  FormGroup,
  FormInput,
  FormInputUpload,
  FormLabel,
  FormPhotoUpload,
  Formu,
  UserPhoto,
} from './profileForm.styles.js';

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
    console.log('submit');
  };
  return (
    <Cont>
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <Formu onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            value={name}
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <FormInput
            type="email"
            value={email}
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormPhotoUpload>
          {profile?.photo ? (
            <UserPhoto src={require(`../../assets/users/${profile.photo}`)} alt="User" />
          ) : (
            <UserPhoto src={require(`../../assets/users/default.jpg`)} alt="User" />
          )}
          <FormLabel htmlFor="photo">Choose new photo</FormLabel>
          <FormInputUpload type="file" accept="image/*" name="photo" />
        </FormPhotoUpload>
        <FormGroup>
          <Btn type="submit">Save settings</Btn>
        </FormGroup>
      </Formu>
    </Cont>
  );
};

export default ProfileForm;
