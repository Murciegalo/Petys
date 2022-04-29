import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { grabUser } from '../../redux/user/user.selector';
import {
  Cont,
  FormGroup,
  FormInput,
  FormInputUpload,
  FormLabel,
  FormPhotoUpload,
  Formu,
  UserPhoto,
  Btn,
  Header,
} from './profileForm.styles.js';

const ProfileForm = () => {
  const user = useSelector(grabUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user !== null) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <Cont>
      <Header>Your account settings</Header>
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
          {user?.photo ? (
            <UserPhoto src={require(`../../assets/users/${user.photo}`)} alt="User" />
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
