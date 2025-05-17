'use client'
import * as styles from '@/app/home/components/shared/SectionHeader.css'
import { IcInfo, IcRight } from '@/assets/svg'

interface SectionHeaderProps {
  text: string
  showNotice?: boolean
  showRight?: boolean
}

const SectionHeader = ({
  text,
  showNotice = false,
  showRight = false,
}: SectionHeaderProps) => {
  return (
    <div className={styles.sectionWrap}>
      <div className={styles.sectionTitleWrap}>
        <p className={styles.sectionTitle}>{text}</p>
        {showNotice && <IcInfo />}
      </div>
      {showRight && <IcRight />}
    </div>
  )
}

export default SectionHeader
