import React from 'react';
import { Modal, Button } from 'antd';

import PropTypes from 'prop-types';

ModalForm.propTypes = {
  onChange: PropTypes.func,
};

function ModalForm(props) {
  
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
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </>
      );
    
export default ModalForm;
