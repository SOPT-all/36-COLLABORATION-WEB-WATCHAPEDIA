import { ButtonHTMLAttributes } from 'react'
import { font } from '@/app/styles.css'
import clsx from 'clsx'
import { button } from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: Props) => {
  return (
    <button
      className={clsx(button, font.body_m_15)}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
