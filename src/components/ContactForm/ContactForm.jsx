import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Common/Box';
import { Label, Input, Button } from './ContactForm.styled';
import { validation } from 'constants';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.resetState();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ ...prev, [name]: value }));
  };

  resetState = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
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
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
