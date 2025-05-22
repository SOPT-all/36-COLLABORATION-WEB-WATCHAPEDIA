'use client'

import { useRouter } from 'next/navigation'

import { IcHome, IcNotice, IcProfile, IcRate, IcSearch } from '@/assets/svg'
import { PATH } from '@/shared/constants/path'

import * as styles from './BottomNav.css'

export default function Bottom() {
  const router = useRouter()

  return (
    <nav className={styles.tabBar}>
      <div className={styles.tabItem} onClick={() => router.push(PATH.HOME)}>
        <span className={styles.tabIcon}>
          <IcHome />
        </span>
        <span>홈</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}>
          <IcSearch />
        </span>
        <span>검색</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}>
          <IcRate />
        </span>
        <span>평가</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}>
          <IcNotice />
        </span>
        <span>소식</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}>
          <IcProfile />
        </span>
        <span>나의 왓챠</span>
      </div>
    </nav>
  )
}
