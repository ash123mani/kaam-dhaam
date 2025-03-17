import type { HTMLProps, ReactNode } from 'react';
import styles from './input.module.css'


interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input(props: InputProps) {
  return (
    <input {...props} className={styles.kdInput} />
  )
}