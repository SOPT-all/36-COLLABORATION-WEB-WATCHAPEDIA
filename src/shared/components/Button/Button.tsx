import { ButtonHTMLAttributes } from 'react'
import { button } from './styles.css'
import { font } from '@/app/styles.css'
import clsx from 'clsx'

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
