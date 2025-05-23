'use client'

import { useRouter } from 'next/navigation'

import { IcXicon } from '@/assets/svg'

import * as styles from './Header.css'

interface HeaderProps {
  canSave: boolean
  onSave: () => void
}

const Header = ({ canSave, onSave }: HeaderProps) => {
  const router = useRouter()

  return (
    <div className={styles.headerWrap}>
      <div style={{ marginLeft: '14px' }}>
        <IcXicon onClick={() => router.back()} role="button" tabIndex={0} />
      </div>
      <span className={styles.headerTitle}>펀치 드링크 러브</span>
      <span
        className={styles.saveBtn}
        data-disabled={!canSave}
        tabIndex={canSave ? 0 : -1}
        aria-disabled={!canSave}
        onClick={() => {
          if (canSave) onSave()
        }}
        onKeyDown={(e) => {
          if (canSave && (e.key === ' ' || e.key === 'Enter')) {
            onSave()
          }
        }}
      >
        저장
      </span>
    </div>
  )
}

export default Header
