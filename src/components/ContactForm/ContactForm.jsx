// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'components/Common/Box';
import { Label, Input, Button } from './ContactForm.styled';
import { validation } from 'constants';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetState();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box as="form" mb={4} onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern={validation.text.name}
          title={validation.text.title}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={validation.tel.title}
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
