"use client";
import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { ModalHeader } from './modal-header'
import { ModalContent } from './modal-content'
import { ModalFooter } from './modal-footer'

import styles from './modal.module.css'

interface ModalProps {
  children: ReactNode;
  onEscKeyPress?: () => void;
}

const Modal = ({ children, onEscKeyPress }:ModalProps) => {
  const handleEscKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onEscKeyPress?.()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown, false);

    return () => document.removeEventListener('keydown', handleEscKeydown, false)
  }, [])

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBackdrop}></div>
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
  ModalFooter
}
