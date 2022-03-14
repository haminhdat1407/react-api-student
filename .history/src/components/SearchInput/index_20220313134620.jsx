import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

SearchForm.propTypes = {
  onChange: PropTypes.func,
};

function SearchForm({ onChange }) {
  const [valueInput, setValueInput] = useState('');
  const handleInputChange = (e) => {
    setValueInput(e.target.value);

    onChange(e.target.value);
  };
  return <Input placeholder='Search...' onChange={handleInputChange} />;
}

export default SearchForm;
