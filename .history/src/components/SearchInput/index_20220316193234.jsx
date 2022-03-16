import PropTypes from 'prop-types';
import { Input } from 'antd';

SearchForm.propTypes = {
  onChange: PropTypes.func,
};

function SearchForm({ onChange }) {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Input
      style={{ margin: '14px 19px', width: '88%' }}
      placeholder='Search...'
      onChange={handleInputChange}
    />
  );
}

export default SearchForm;
