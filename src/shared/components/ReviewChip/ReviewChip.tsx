import { ButtonHTMLAttributes } from 'react'
import { reviewChip } from './ReviewChip.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isSelected: boolean
}

const ReviewChip = ({ text, isSelected = false, ...props }: Props) => {
  return (
    <button className={reviewChip({ isSelected })} {...props}>
      {text}
    </button>
  )
}

export default ReviewChip
