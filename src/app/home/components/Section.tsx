import * as styles from '@/app/home/components/Section.css'

import SectionHeader from './SectionHeader'

interface SectionProps {
  title: string
  children: React.ReactNode
  showRight?: boolean
  showNotice?: boolean
}

const Section = ({
  title,
  children,
  showRight = false,
  showNotice = false,
}: SectionProps) => {
  return (
    <div>
      <SectionHeader
        text={title}
        showRight={showRight}
        showNotice={showNotice}
      />
      <div className={styles.sectionContent}>{children}</div>
    </div>
  )
}

export default Section
