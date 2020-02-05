import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../styles/components/Dialog';
import TextField from '../../styles/components/TextField'
import TagsInput from '../../styles/components/TagsInput';
import SubmitButton from '../../styles/components/SubmitButton';
import { Container } from './styles';
import useForm, { FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../services/api';

export default function NewTool({ open, handleClose }) {
  const [tags, setTags] = useState([]);

  const schema = Yup.object().shape({
    title: Yup.string()
      .required(),
    link: Yup.string()
      .required(),
    description: Yup.string()
      .required()    
  });

  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  });

  function addTag(tag) {
    setTags(old => [...old, tag]);
  }

  function removeTag(index) {
    setTags(old => old.filter((_, idx) => index !== idx));    
  }

  async function onSubmit({ title, link, description }) {
    await api.post('/tools', { title, link, description, tags });
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container>
        <h4>
          <span>&#10010;</span>
          Add new tool
        </h4>
        <FormContext register={register} errors={errors}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField 
              id='title'
              name='title'
              label='Title'
              placeholder='Tool name'
              autoFocus='on'
            />
            <TextField
              id='link'
              name='link'          
              label='Link'
              placeholder='Tool link'
            />
            <TextField
              id='description'
              name='description'
              label='Description'
              placeholder='Tool description'
            />
            <TagsInput 
              label='Tags' 
              tags={tags} 
              addTag={addTag} 
              removeTag={removeTag}
            />
            <SubmitButton caption='Submit'/>
          </form>
        </FormContext>
      </Container>
    </Dialog>
  )
}

NewTool.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}