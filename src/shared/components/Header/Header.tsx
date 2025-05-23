'use client'

import { useState } from 'react'
import Image from 'next/image'

import HomeToggle from '@/shared/components/HomeToggle/HomeToggle'
import watchapediaLogo from '@/assets/img/watchapedia.png'

import * as styles from './Header.css'
import { HEADER_TABS, TOGGLE_OPTIONS, type ToggleType } from './Tab'

const Header = () => {
  const [selectedToggle, setSelectedToggle] = useState<ToggleType>(
    TOGGLE_OPTIONS.WATCHA_HOME,
  )
  const tabs = HEADER_TABS[selectedToggle]
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0])

  const handleToggle = (toggle: ToggleType) => {
    setSelectedToggle(toggle)
    if (toggle === TOGGLE_OPTIONS.WATCHA_HOME) {
      setSelectedTab('영화')
    } else if (toggle === TOGGLE_OPTIONS.MAGAZINE) {
      setSelectedTab('아티클')
    }
  }

  const handleTabClick = (tab: string) => {
    if (
      (selectedToggle === TOGGLE_OPTIONS.WATCHA_HOME && tab === '영화') ||
      (selectedToggle === TOGGLE_OPTIONS.MAGAZINE && tab === '아티클')
    ) {
      setSelectedTab(tab)
    }
  }

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topRow}>
        <Image
          src={watchapediaLogo}
          alt="watchapedia logo"
          width={86}
          height={32}
        />
        <HomeToggle selected={selectedToggle} handleToggle={handleToggle} />
      </div>
      <nav className={styles.tabNav}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={styles.tab({
              active: selectedTab === tab,
            })}
            onClick={() => handleTabClick(tab)}
            style={{
              opacity:
                (selectedToggle === TOGGLE_OPTIONS.WATCHA_HOME &&
                  tab !== '영화') ||
                (selectedToggle === TOGGLE_OPTIONS.MAGAZINE && tab !== '아티클')
                  ? 0.5
                  : 1,
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
