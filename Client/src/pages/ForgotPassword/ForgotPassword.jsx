import { useState } from 'react';
import { ResetPassForm } from '../../components/ResetPassForm/ResetPassForm';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('to be completed');
  };
  return <ResetPassForm handleSubmit={handleSubmit} email={email} setEmail={setEmail} />;
};

export default ForgotPassword;
