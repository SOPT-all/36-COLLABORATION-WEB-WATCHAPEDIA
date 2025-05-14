import { ButtonHTMLAttributes } from 'react'
import { button } from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: Props) => {
  return (
    <button className={button} {...props}>
      {text}
    </button>
  )
}

export default Button
