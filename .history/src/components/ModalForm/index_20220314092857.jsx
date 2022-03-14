import React, { useState } from 'react';
// import { Modal, Button } from 'antd';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Modal,
} from 'antd';

import PropTypes from 'prop-types';

ModalForm.propTypes = {
  onChange: PropTypes.func,
};

function ModalForm(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  ///Form
  const FormInput = ({ onChange, dataEdit = {} }) => {
    const onFinish = (e) => {
      const value = { ...e };
      const formValue = {
        ...value,
        id: value.id + Math.random() * 10000,
      };
      onChange(formValue);
    };

    return (
      <>
        <Button type='primary' onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title='Basic Modal'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {/* Form */}
        </Modal>
      </>
    );
  };
}

export default ModalForm;
