import clsx from 'clsx'
import { font } from '@/app/styles.css'
import { ButtonHTMLAttributes } from 'react'
import { reviewChip } from './ReviewChip.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isSelected: boolean
}

const ReviewChip = ({ text, isSelected = false, ...props }: Props) => {
  const typography = isSelected ? font.label_m_12 : font.label_r_12

  return (
    <button className={clsx(reviewChip({ isSelected }), typography)} {...props}>
      {text}
    </button>
  )
}

export default ReviewChip
