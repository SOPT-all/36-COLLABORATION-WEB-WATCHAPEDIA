import * as styles from './LabelContent.css'

interface LabelContentProps {
  label: string
  children: React.ReactNode
  gap?: 'sm' | 'lg'
}

export const LabelContent = ({
  label,
  children,
  gap = 'sm',
}: LabelContentProps) => {
  return (
    <div className={styles.labelContentContainer({ gap })}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  )
}

export default LabelContent
