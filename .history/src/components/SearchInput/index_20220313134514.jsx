import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

SearchForm.propTypes = {
  onChange: PropTypes.func,
};

function SearchForm(props) {
  const [valueInput, setValueInput] = useState('');
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return <Input placeholder='Search...' onChange={handleInputChange} />;
}

export default SearchForm;
