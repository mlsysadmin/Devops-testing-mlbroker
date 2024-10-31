import { CheckCircleFilled, QuestionCircleFilled } from "@ant-design/icons";
import SemiRoundBtn from "../components/custom/buttons/SemiRoundBtn.custom";
import '../styles/modals/AntdModal.css';

const styles = {
    content: {
        padding: '22px 25px'
    },
}

const ConfirmModal = (isModalOpen ,Modal, title, message, okText, onConfirm, onCancel) => {
    Modal.confirm({
        open: isModalOpen,
        title: title,
        content: message,
        okText: okText,
        cancelText: 'Cancel',
        icon: <QuestionCircleFilled style={{ color: '#faad14' }} />,
        wrapClassName: 'confirm-modal',
        styles: styles,
        className: 'confirm-modal',
        onOk: () => {
            onConfirm()
        },
        onCancel: () => {
            // onCancel()
            console.log("CANCELLED");
        },
    });
}

const SuccessModal = (isModalOpen, Modal, title, message, okText, onConfirm) => {
    Modal.success({
        open: isModalOpen,
        title: title,
        content: message,
        okText: okText,
        icon:<CheckCircleFilled style={{ color: 'green' }} />,
        wrapClassName: 'success-modal',
        className: 'success-modal',
        styles: styles,
        onOk() {
            console.log("PREVIEW LISTING");
            onConfirm();
        },
    });
}

export {
    ConfirmModal,
    SuccessModal
};