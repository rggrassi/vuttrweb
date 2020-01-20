import React from 'react';
import { Container } from './styles';
import TextField from '../../styles/components/TextField';
import SubmitButton from '../../styles/components/SubmitButton';
import useForm from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .required(),
  email: Yup.string()
    .email().required,
      
})

export default function Profile() {
  return (
    <Container>
      <form noValidate>
        <TextField
          name='name'
          label='Name'
          placeholder='Username'
          autoFocus='on'          
        />
        <TextField
          name='email'
          label='Email'
          placeholder='Email address'
          type='email'
        />
        <hr/>
        <TextField
          name='oldPassword'
          type='password'
          label='Current password'
          placeholder='Your current password'
        />
        <TextField
          name='password'
          type='password'
          label='New password'
          placeholder='New password'
        />
        <TextField 
          name='confirmPassword'
          type='password'
          label='New password'
          placeholder='Password confirmation'
        />
        <SubmitButton label='Update profile' loading={false}/>
     </form>
    </Container>
  )
}