"use client"

import * as styles from "./Bottom.css";
import { IcHome, IcHomeDefault, IcNotice, IcNoticeActive, IcProfile, IcRate, IcSearch } from "@/svg";
import { useState } from "react";


export default function Bottom() {
  const [noticeActive, setNoticeActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  return (
    <nav className={styles.tabBar}>
      <div className={styles.tabItem} onClick={() => setHomeActive((prev) => !prev)} style={{ cursor: "pointer" }}>
        <span className={styles.tabIcon}>
          {homeActive ? <IcHome /> : <IcHomeDefault />}
          </span>
        <span>홈</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}><IcSearch /></span>
        <span>검색</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}><IcRate /></span>
        <span>평가</span>
      </div>
      <div
        className={styles.tabItem}
        onClick={() => setNoticeActive((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        <span className={styles.tabIcon}>
          {noticeActive ? <IcNoticeActive /> : <IcNotice />}
        </span>
        <span>소식</span>
      </div>
      <div className={styles.tabItem}>
        <span className={styles.tabIcon}><IcProfile /></span>
        <span>나의 왓챠</span>
      </div>
    </nav>
  );
}