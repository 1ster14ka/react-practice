import Modal from "react-modal";
import s from "./ImageModal.module.css";
const ImageModal = ({
  img: { id, regular, alt_description },
  closeModal,
  modalIsOpen,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={regular} alt={alt_description} className={s.img} />
    </Modal>
  );
};

export default ImageModal;
