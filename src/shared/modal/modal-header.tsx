import React, { ReactNode } from 'react'

import styles from './modal-header.module.css'

interface ModalHeaderProps {
    children: ReactNode,
}

export const ModalHeader = ({ children }:ModalHeaderProps) => (
  <div className={`${styles.modalHeader} font-semibold`}>
    {children}
  </div>
)