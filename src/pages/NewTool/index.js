import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../styles/components/Dialog';
import TextField from '../../styles/components/TextField'
import TagsInput from '../../styles/components/TagsInput';
import { Container } from './styles';
import useForm from 'react-hook-form';
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
    setTags(old => old.filter((tag, idx) => index !== idx));    
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField 
            label='Title'
            placeholder='Tool name'
            name='title'
            autoFocus='on'
            register={register}
            error={errors.title && errors.title.message}  
          />
          <TextField
            label='Link'
            placeholder='Tool link'
            name='link'          
            register={register}
            error={errors.link && errors.link.message}  
          />
          <TextField
            label='Description'
            placeholder='Tool description'
            name='description'
            register={register}
            error={errors.description && errors.description.message}              
          />
          <TagsInput 
            label='Tags' 
            tags={tags} 
            addTag={addTag} 
            removeTag={removeTag}
          />
        </form>
      </Container>
    </Dialog>
  )
}

NewTool.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}