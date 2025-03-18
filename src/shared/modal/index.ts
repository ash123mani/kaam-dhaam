import { ModalContent } from './modal-content';
import { Modal as InternalModal, ModalHeader } from './modal';
import { ModalFooter } from "@/shared/modal/modal-footer";

type CompoundedModal = typeof InternalModal & {
    Content: typeof ModalContent;
    Header: typeof ModalHeader;
    Footer: typeof ModalFooter;
};

export const Modal = InternalModal as CompoundedModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
