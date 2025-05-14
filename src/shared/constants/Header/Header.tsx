'use client'

import Image from 'next/image'
import { useState } from 'react'
import * as styles from './Header.css'

const WATCHA_HOME_TABS = [
  '기획전',
  '아티클',
  '인터뷰',
  '큐레이션',
  '콘텐츠소식',
]
const MAGAZINE_TABS = ['영화', '시리즈', '책', '웹툰']

const Header = () => {
  const [selectedToggle, setSelectedToggle] = useState<'왓챠홈' | '매거진'>(
    '왓챠홈',
  )
  const tabs = selectedToggle === '왓챠홈' ? WATCHA_HOME_TABS : MAGAZINE_TABS
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleToggle = (toggle: '왓챠홈' | '매거진') => {
    setSelectedToggle(toggle)
    setSelectedTab(toggle === '왓챠홈' ? WATCHA_HOME_TABS[0] : MAGAZINE_TABS[0])
  }

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topRow}>
        <Image
          src={require('@/assets/img/watchapedia.png')}
          alt="watchapedia logo"
          width={86}
          height={30}
        />
        <div className={styles.toggleBg}>
          <button
            className={
              selectedToggle === '왓챠홈' ? styles.toggleActive : styles.toggle
            }
            onClick={() => handleToggle('왓챠홈')}
          >
            왓챠홈
          </button>
          <button
            className={
              selectedToggle === '매거진' ? styles.toggleActive : styles.toggle
            }
            onClick={() => handleToggle('매거진')}
          >
            매거진
          </button>
        </div>
      </div>
      <nav className={styles.tabNav}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? styles.tabActive : styles.tab}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
