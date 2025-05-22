import { TextareaHTMLAttributes } from 'react'

import * as styles from './TextField.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
}

const TextField = ({ value, ...props }: Props) => {
  return <textarea value={value} className={styles.textField} {...props} />
}

export default TextField
