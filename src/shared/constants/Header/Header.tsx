"use client"

import { useState } from 'react';
import * as styles from './Header.css';
import HomeToggle from '@/shared/components/HomeToggle/HomeToggle';
import Image from 'next/image';
import { HEADER_TABS, TOGGLE_OPTIONS, type ToggleType } from './Tab'

const Header = () => {
  const [selectedToggle, setSelectedToggle] = useState<ToggleType>(TOGGLE_OPTIONS.WATCHA_HOME);
  const tabs = HEADER_TABS[selectedToggle];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleToggle = (toggle: ToggleType) => {
    setSelectedToggle(toggle);
    const newTabs = HEADER_TABS[toggle];
    setSelectedTab(newTabs[0]);
  };

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topRow}>
        <Image src={require('@/assets/img/watchapedia.png')} alt="watchapedia logo" width={86} height={32} />
        <HomeToggle selected={selectedToggle} handleToggle={handleToggle} />
      </div>
      <nav className={styles.tabNav}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={styles.tab({active: selectedTab === tab})}
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