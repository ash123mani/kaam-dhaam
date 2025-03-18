import React, { ReactNode } from 'react'

import styles from './modal-footer.module.css'

interface ModalFooterProps {
    children: ReactNode,
}

export const ModalFooter = ({ children }:ModalFooterProps) => (
  <div className={styles.modalFooter}>
    {children}
  </div>
)