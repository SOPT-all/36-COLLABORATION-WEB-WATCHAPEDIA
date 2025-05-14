import { tag } from './Tag.css'

interface TagProps {
  text: string
  color?: 'blue' | 'orange' | 'gray' | 'black'
  size?: 'sm' | 'lg'
}

export const Tag = ({ text, color = 'black', size = 'lg' }: TagProps) => {
  return <div className={tag({ color, size })}>{text}</div>
}
