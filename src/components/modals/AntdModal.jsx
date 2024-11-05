import { Modal } from 'antd';
import React, { useState } from 'react';
import SemiRoundBtn from '../custom/buttons/SemiRoundBtn.custom';

import '../../styles/modals/AntdModal.css';

const AntdModal = (props) => {
    // Add your component logic here
    const {
        isModalOpen,
        setIsModalOpen,
        handleClick,
        footer,
        title,
        children,
        width
    } = props;

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal
            title={title}
            open={isModalOpen}
            onOk={handleClick}
            onCancel={handleCancel}
            footer={footer}
            width={width}
        >
            {children}
        </Modal>
    );
};

export default AntdModal;