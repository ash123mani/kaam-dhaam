import type { HTMLProps, ReactNode } from 'react';
import styles from './input.module.css'


interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ReactNode;
  name: string;
}

export function Input({ width, ...restProps }: InputProps) {
  const { label, name } = restProps;
  return (
    <div className={styles.kdInputWrapper}>
      {label &&  <label htmlFor={name} className={`${styles.kdInputLabel} font-medium`}>{label}</label>}
      <input className={`${styles.kdInput} font-regular`} id={name} style={{ width }} {...restProps} />
    </div>
  )
}