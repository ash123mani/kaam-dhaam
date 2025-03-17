import type { HTMLProps, ReactNode } from 'react';
import styles from './input.module.css'


interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input({ width, ...restProps }: InputProps) {
  return (
    <input className={`${styles.kdInput} font-regular`}  style={{ width }} {...restProps} />
  )
}