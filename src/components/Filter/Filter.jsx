import PropTypes from 'prop-types';
import { FilterLabel, Input, Span } from './Filter.styled';
import { Box } from 'components/Common';

export const Filter = ({ onFilter, value }) => {
  const handleInputChange = e => {
    onFilter(e.target.value);
  };

  return (
    <Box width="item" mx="auto" mb={4}>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input onChange={handleInputChange} value={value} />
      </FilterLabel>
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
