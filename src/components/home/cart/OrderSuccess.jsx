import { useState } from "react";

export default function OrderSuccess({open, setOpen}) {

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={null}
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
    >
    </Modal>
  );
}
