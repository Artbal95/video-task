// Node Modules
import { FC, ReactNode } from "react";
// Bootstrap UI
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalProps, Button } from "react-bootstrap";

interface IDialogProps extends ModalProps {
    children: ReactNode,
    show: boolean,
    videoName: string
    onHide: () => void
}

const Dialog: FC<IDialogProps> = ({ show, onHide, children, videoName, ...props }) => (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                {videoName}
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );

    export default Dialog;