"use client"

import { useState } from 'react';
import * as styles from './Header.css';
import HomeToggle from '@/shared/components/HomeToggle/HomeToggle';
import Image from 'next/image';
import { HEADER_TABS, TOGGLE_OPTIONS, type ToggleType } from './Tab'

const Header = () => {
  const [selectedToggle, setSelectedToggle] = useState<ToggleType>(TOGGLE_OPTIONS.WATCHA_HOME);
  
  // Header.ts에서 정의한 HEADER_TABS 사용
  const tabs = HEADER_TABS[selectedToggle];
  
  // selectedTab 타입을 string으로 변경
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleToggle = (toggle: ToggleType) => {
    setSelectedToggle(toggle);
    // 토글 변경 시 해당 탭의 첫 번째 항목으로 설정
    const newTabs = HEADER_TABS[toggle];
    setSelectedTab(newTabs[0]);
  };

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topRow}>
        <Image src={require('@/assets/img/watchapedia.png')} alt="watchapedia logo" width={86} height={32} />
        <HomeToggle selected={selectedToggle} onToggle={handleToggle} />
      </div>
      <nav className={styles.tabNav}>
        {tabs.map(tab => (
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
  );
};

export default Header;