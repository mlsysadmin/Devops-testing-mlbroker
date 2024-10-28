import React, { useState } from "react";
import { Modal, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "../../../styles/support/PropertyMapModal.css";
const PropertyMapButton = ({ address }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Button
        id="buttonShowMap"
        onClick={showModal}
        icon={<EnvironmentOutlined />}
      >
        Show Property on Map
      </Button>
      <Modal
        className="modalMap"
        title="Show Property on Map"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="address">
          <EnvironmentOutlined />
          <p>{address}</p>
        </div>
        <br />

        <div style={{ height: "400px", width: "100%" }}>
          <iframe
            title="Property Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed`}
          />
        </div>
        <br />
        <div className="buttonBottom">
          <div onClick={handleCancel} className="buttonCancel">
            close
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PropertyMapButton;
