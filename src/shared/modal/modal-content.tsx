import React, { ReactNode } from 'react'

import styles from './modal-content.module.css'

interface ModalContentProps {
    children: ReactNode,
}

export const ModalContent = ({ children }:ModalContentProps) => (
  <div className={styles.modalContent}>
    {children}
  </div>
)