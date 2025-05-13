import clsx from 'clsx'
import { font } from '@/app/styles.css'
import { tag } from './Tag.css'

interface TagProps {
  text: string
  color?: 'blue' | 'orange' | 'gray' | 'black'
  size?: 'sm' | 'lg'
}

export const Tag = ({ text, color = 'black', size='lg' }: TagProps) => {
  const typo = color === 'black' ? font.body_sb_13 : font.label_r_10

  return <div className={clsx(tag({ color, size }), typo)}>{text}</div>
}
