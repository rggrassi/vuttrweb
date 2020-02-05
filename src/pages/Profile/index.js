import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import TextField from '../../styles/components/TextField';
import SubmitButton from '../../styles/components/SubmitButton';
import useForm, { FormContext } from 'react-hook-form';
import api from '../../services/api';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string().min(6),
  password: Yup.string().min(6)
    .when('oldPassword', (oldPassword, field) => 
      oldPassword ? field.required() : field
    ),
  confirmPassword: Yup.string()
    .when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
    )      
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  })

  async function onSubmit(data) {
    const response = api.put('/users/', { 
      name, email, oldPassword, password, confirmPassword
    })
  }

  return (
    <Container>
      <FormContext register={register} errors={errors}>
        <form onSubmit={handleSubmit} noValidate>
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
            label='Confirm password'
            placeholder='Password confirmation'
          />
          <SubmitButton label='Update profile' loading={false}/>
      </form>
     </FormContext>
    </Container>
  )
}