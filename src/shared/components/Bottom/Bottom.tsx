import * as styles from "./Bottom.css"
import homeIcon from "@/assets/icons/icon_home.svg"
import searchIcon from "@/assets/icons/Search.svg"
import rateIcon from "@/assets/icons/icon_rate.svg"
import noticeIcon from "@/assets/icons/icon_notice.svg"
import noticeIconActive from "@/assets/icons/icon_notice_active.svg"
import profileIcon from "@/assets/icons/profile.svg"

export default function Bottom({ activeTab }: { activeTab: number }) {
  return (
    <nav className="tab-bar">
      <div className={`tab-item ${activeTab === 0 ? "active" : ""}`}>
        <img src={homeIcon} alt="홈" />
        <span>홈</span>
      </div>
      <div className={`tab-item ${activeTab === 1 ? "active" : ""}`}>
        <img src={searchIcon} alt="검색" />
        <span>검색</span>
      </div>
      <div className={`tab-item ${activeTab === 2 ? "active" : ""}`}>
        <img src={rateIcon} alt="평가" />
        <span>평가</span>
      </div>
      <div className={`tab-item ${activeTab === 3 ? "active" : ""}`}>
        <img src={activeTab === 3 ? noticeIconActive : noticeIcon} alt="소식" />
        <span>소식</span>
      </div>
      <div className={`tab-item ${activeTab === 4 ? "active" : ""}`}>
        <img src={profileIcon} alt="나의 왓챠" />
        <span>나의 왓챠</span>
      </div>
    </nav>
  )
}