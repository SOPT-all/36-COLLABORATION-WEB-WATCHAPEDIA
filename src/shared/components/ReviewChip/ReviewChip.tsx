import { ButtonHTMLAttributes } from 'react'
import * as styles from './ReviewChip.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isSelected: boolean
}

const ReviewChip = ({ text, isSelected = false, ...props }: Props) => {
  return (
    <button
      type="button"
      className={styles.reviewChip({ isSelected })}
      {...props}
    >
      {text}
    </button>
  )
}

export default ReviewChip
