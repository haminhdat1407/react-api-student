import { Button, Form, Input, InputNumber, Modal, Radio, Select } from 'antd';
import React, { useState } from 'react';

function FormEdit() {
  const onFinish = (e) => {
    const value = { ...e };

    const formValue = {
      ...value,
      id: value.id + Math.random() * 10000,
    };
  };

  return (
 
  );
}

export default FormEdit;
