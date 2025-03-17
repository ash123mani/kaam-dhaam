import styles from './input.module.css'


interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input(props: InputProps) {
  return (
    <input {...props} className={styles.kdInput} />
  )
}