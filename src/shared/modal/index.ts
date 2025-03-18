import { ModalContent } from './modal-content';
import { Modal as InternalModal, ModalHeader } from './modal';

type CompoundedModal = typeof InternalModal & {
    Content: typeof ModalContent;
    Header: typeof ModalHeader;
};

export const Modal = InternalModal as CompoundedModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
