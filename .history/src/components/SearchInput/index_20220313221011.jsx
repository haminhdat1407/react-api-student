import React, { useState } from 'react';
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
      sytle={{ margin: '14px 19px', width: '190%' }}
      placeholder='Search...'
      onChange={handleInputChange}
    />
  );
}

export default SearchForm;
