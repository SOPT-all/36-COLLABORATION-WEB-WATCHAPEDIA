"use client"

import { IcLeft } from "@/assets/svg"
import * as styles from "./Header.css"
import { useRouter } from "next/navigation"
import { PATH } from "@/shared/constants/path"

const Header = () => {
    const router = useRouter()

  return (
    <div className={styles.HeaderWrapper}>
      <span
        className={styles.backBtn}
        onClick={() => router.push(PATH.CONTENT_DETAIL)}
        role="button"
        tabIndex={0}
      >
        <IcLeft style={{ verticalAlign: 'middle' }} />
        <span className={styles.back}>뒤로</span>
      </span>
      <span className={styles.title}>
        취향 저격 작품추천
      </span>
    </div>
  )
}

export default Header
