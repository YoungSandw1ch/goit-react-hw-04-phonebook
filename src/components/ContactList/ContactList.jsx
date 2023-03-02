import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { ContactItem } from 'components/ContactList/ContactItem';

export const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <Box
      as="ul"
      width="item"
      height="contactsList"
      mx="auto"
      px={4}
      overflowY="scroll"
    >
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onContactDelete}
        />
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
