import * as styles from './Tag.css'

export const TAG_COLORS = ['blue', 'orange', 'gray', 'black'] as const

interface TagProps {
  text: string
  color?: (typeof TAG_COLORS)[number]
  size?: 'sm' | 'lg'
}

export const Tag = ({ text, color = 'black', size = 'lg' }: TagProps) => {
  return <div className={styles.tag({ color, size })}>{text}</div>
}
