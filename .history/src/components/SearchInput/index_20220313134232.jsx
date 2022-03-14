import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

SearchForm.propTypes = {
  onChange: PropTypes.func,
};

function SearchForm(props) {
  return <Input placeholder='Search...' />;
}

export default SearchForm;
