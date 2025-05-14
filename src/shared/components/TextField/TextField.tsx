import { TextareaHTMLAttributes } from 'react'
import { textField } from './TextField.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextField = ({ ...props }: Props) => {
  return <textarea className={textField} {...props} />
}

export default TextField
