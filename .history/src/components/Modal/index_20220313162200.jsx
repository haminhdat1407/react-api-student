import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

ModalEdit.propTypes = {};

function ModalEdit(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalEdit;
