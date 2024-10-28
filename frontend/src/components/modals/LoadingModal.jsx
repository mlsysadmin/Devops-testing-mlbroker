import { Modal, Spin } from "antd";
import React from "react";
import LoadingIcon from '../../asset/icons/loading_bar.gif';

const Loading = ({ isSpin, style, loadingLabel }) => {
    return (
        <Modal
            open={isSpin}
            closable={false}
            footer={null}
            centered={true}
            width={200}
            style={{ textAlign: 'center' }}
        >
            <Spin spinning={isSpin} style={style} indicator={
                <img src={LoadingIcon} alt="loading" style={{ width: '50px', height: '50px' }} />
            }>

            </Spin>
            {
                <p style={{ fontSize: '17px' }}>
                    {
                        loadingLabel
                    }
                </p>
            }
        </Modal>
    );
}

export default Loading;