import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { ModalHeader } from './modal-header'
import { ModalContent } from './modal-content'

import styles from './modal.module.css'


interface ModalProps {
  children: ReactNode;
  onEscKeydown?: () => void;
}

const Modal = ({ children, onEscKeydown }:ModalProps) => {
  const handleEscKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && onEscKeydown) {
      onEscKeydown()
    }
  }

  useEffect(() => {
    if (onEscKeydown) {
      document.addEventListener(
        'keydown', handleEscKeydown, false,
      )
    }

    return () => document.removeEventListener(
      'keydown', handleEscKeydown, false,
    )
  }, [])

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export {
  Modal,
  ModalHeader,
  ModalContent,
}
