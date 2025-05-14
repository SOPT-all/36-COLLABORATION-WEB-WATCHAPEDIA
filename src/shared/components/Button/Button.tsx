import { ButtonHTMLAttributes } from 'react'
import * as styles from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: Props) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {text}
    </button>
  )
}

export default Button
