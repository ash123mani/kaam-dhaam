import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import styles from './button.module.css'


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: ReactNode;
    variant?: "outline" | "filled";
    children: ReactNode;
    width?: number;
}

export function Button({ width, variant = "filled", children, ...restProps }: ButtonProps): ReactNode {
  let variantClass = "kdButtonFilled";
  if (variant === "outline") variantClass = "kdButtonOutlined";

  return (
    <button style={{ width }} {...restProps} className={`font-semibold ${styles.kdButton} ${styles[variantClass]}`}>
      {children}
    </button>
  )
}