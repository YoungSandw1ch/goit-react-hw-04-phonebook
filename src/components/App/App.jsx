import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Title } from '../Common';
import { Wrapper } from './App.styled';
import { Container } from '../Container';
import { ContactForm } from '../ContactForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { initialState } from 'constants';
import { report } from 'utils';

const LS_CONTACTS = 'ls_contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_CONTACTS)) || initialState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(LS_CONTACTS, JSON.stringify(contacts));
    } catch (error) {
      console.log(error.message);
    }
  }, [contacts]);

  const contactFormSubmit = (name, number) => {
    const id = nanoid();
    setContacts(prevContacts => {
      const isContactExist = prevContacts.reduce(
        (acc, c) =>
          c.name.toLowerCase() === name.toLowerCase() ? acc + 1 : acc,
        0
      );
      if (isContactExist) {
        report();
        return prevContacts;
      }
      return [...prevContacts, { id, name, number }];
    });
  };

  const deleteContact = id =>
    setContacts(contacts => contacts.filter(contact => contact.id !== id));

  const filterContacts = () => {
    if (!filter) return null; //вирішує проблему постійної фільрації
    const normalizedText = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedText)
    );
  };

  const filteredContact = filterContacts();

  return (
    <Container>
      <Wrapper>
        <Title mb={4} color="blue">
          Phonebook
        </Title>
        <ContactForm onSubmit={contactFormSubmit} />
        <Title as="h2" mb={4} color="blue" fontSize="ms">
          Contacts
        </Title>
        <Filter onFilter={setFilter} value={filter} />
        <ContactList
          contacts={filteredContact ?? contacts} //вирішує проблему постійної фільрації
          onContactDelete={deleteContact}
        />
      </Wrapper>
    </Container>
  );
};
