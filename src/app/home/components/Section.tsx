import { ReactNode } from 'react'

import * as styles from './Section.css'
import SectionHeader from './SectionHeader'

interface SectionProps {
  title: string
  children: ReactNode
  showRight?: boolean
  showNotice?: boolean
  id?: string
}

const Section = ({
  title,
  children,
  showRight,
  showNotice,
  id,
}: SectionProps) => {
  return (
    <section className={styles.section} id={id}>
      <SectionHeader
        text={title}
        showRight={showRight}
        showNotice={showNotice}
      />
      {children}
    </section>
  )
}

export default Section
