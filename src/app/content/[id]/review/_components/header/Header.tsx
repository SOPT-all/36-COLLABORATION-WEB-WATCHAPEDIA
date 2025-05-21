"use client"

import { IcXicon } from "@/assets/svg"
import * as styles from "./Header.css"
import { useRouter, useParams } from "next/navigation"
import { PATH } from "@/shared/constants/path"
import { moviePresets } from "@/shared/widget/MovieCard/MovieMock"

interface HeaderProps {
  canSave?: boolean
}

const Header = ({ canSave = false }: HeaderProps) => {
  const router = useRouter()
  const params = useParams()
  const movieId = params.id as string

  const movieData = Object.values(moviePresets).find(
    movie => movie.id === Number(movieId)
  )

  return (
    <div className={styles.headerWrap}>
      <div style={{ marginLeft: '14px' }}>
        <IcXicon
          onClick={() => router.push(PATH.HOME)}
          role="button"
          tabIndex={0}
        />
      </div>
      <span className={styles.headerTitle}>
        {movieData?.title || '리뷰 작성'}
      </span>
      <span
        className={styles.saveBtn}
        data-disabled={!canSave}
        tabIndex={canSave ? 0 : -1}
        aria-disabled={!canSave}
        onClick={() => {
          if (canSave) router.push(PATH.RECOMMEND)
        }}
        onKeyDown={e => {
          if (canSave && (e.key === ' ')) {
            router.push(PATH.RECOMMEND)
          }
        }}
      >
        저장
      </span>
    </div>
  )
}

export default Header
