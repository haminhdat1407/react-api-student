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
