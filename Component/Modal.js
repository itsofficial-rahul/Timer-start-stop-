import React, { useState } from "react";
import { Modal, Button } from "antd";

import "./modalPop.css";
function ModalPop() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => setIsModalVisible(false);
  return (
    <div>
      <Modal
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
        width="300px"
        height="150px"
        style={{ textAlign: "center" }}
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
        closeIcon=" "
      >
        {/* <img src={thankYouSmiley} width="80px"></img> */}
        <h4 style={{ marginTop: "7px", fontWeight: "bold" }}>Thank you </h4>
        <p style={{ marginBottom: "-1em", fontWeight: "bold" }}>
          Your Table has been Booked
        </p>
      </Modal>
    </div>
  );
}

export default ModalPop;
