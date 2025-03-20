"use client";
import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image';
import closeIcon from '../../../public/icons/action/close.svg'

import { ModalHeader } from './modal-header'
import { ModalContent } from './modal-content'
import { ModalFooter } from './modal-footer'

import styles from './modal.module.css'

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

const InternalModal = ({ children, onClose }:ModalProps) => {
  const handleEscKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose?.()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown, false);

    return () => document.removeEventListener('keydown', handleEscKeydown, false)
  }, [])

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBackdrop}></div>

      <div className={styles.modalWrapper}>
        <div onClick={onClose} className={styles.modalCloseIcon} role="button">
          <Image src={closeIcon} alt="Close" />
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}

type CompoundedModal = typeof InternalModal & {
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
};

export const Modal = InternalModal as CompoundedModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;