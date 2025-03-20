import type { DetailedHTMLProps, HTMLProps, TextareaHTMLAttributes } from 'react';
import styles from './input.module.css'

type InputProps  = (DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> | HTMLProps<HTMLInputElement>) & {
  as?: 'textarea' | 'text';
  label?: string
};

export function Input(props: InputProps) {
  const { name, label } = props;

  const inputElement = () => {
    if (isTextArea(props)) return <textarea  className={`${styles.kdInput} font-regular`} id={name} {...props} ></textarea>
    else  {
      const {  width, height } = props;
      return <input className={`${styles.kdInput} font-regular`} id={name} style={{ width, height }} {...props} />
    }
  }

  return (
    <div className={styles.kdInputWrapper}>
      {label &&  <label htmlFor={name} className={`${styles.kdInputLabel} font-medium`}>{label}</label>}
      {inputElement()}
    </div>
  )
}

function isTextArea(input: InputProps): input is DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  return input['as'] === 'textarea'
}
