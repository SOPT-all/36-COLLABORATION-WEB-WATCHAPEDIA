import * as styles from './HeaderSection.css'

interface HeaderSectionProps {
  title: string
  count?: string | number
  moreButton?: boolean
  gap?: 'sm' | 'lg'
  children: React.ReactNode
}

const HeaderSection = ({
  title,
  count,
  moreButton = false,
  gap = 'sm',
  children,
}: HeaderSectionProps) => {
  return (
    <section className={styles.HeaderSectionContainer({ gap })}>
      <div className={styles.HeaderSectionHeaderContainer}>
        <h3 className={styles.HeaderSectionTitle}>
          {title}
          {!!count && <span className={styles.HeaderSectionCount}>{count}</span>}
        </h3>
        {moreButton && (
          <button type="button" className={styles.HeaderSectionMoreButton}>
            더보기
          </button>
        )}
      </div>
      {children}
    </section>
  )
}

export default HeaderSection
