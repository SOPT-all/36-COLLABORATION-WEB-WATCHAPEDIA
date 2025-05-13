import clsx from 'clsx'
import { TextareaHTMLAttributes } from 'react'
import { textField } from './TextField.css'
import { font } from '@/app/styles.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextField = ({ ...props }: Props) => {
  return <textarea className={clsx(textField)} {...props} />
}

export default TextField
