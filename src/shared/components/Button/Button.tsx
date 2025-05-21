import { ButtonHTMLAttributes } from 'react'
import * as styles from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  fullWidth?: boolean
}

const Button = ({ text, fullWidth = false, ...props }: Props) => {
  return (
    <button
      type="button"
      className={styles.button({ fullWidth })}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
