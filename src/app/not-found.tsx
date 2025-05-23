'use client'

import { useRouter } from 'next/navigation'

import { PATH } from '@/shared/constants/path'
import Button from '@/shared/components/Button/Button'

import * as styles from './not-found.css'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className={styles.notFoundContainer}>
      <p className={styles.notFoundText}>이 URL은 존재하지 않는 URL입니다.</p>
      <Button
        text="홈으로 이동"
        onClick={() => router.push(PATH.HOME, { scroll: true })}
      />
    </div>
  )
}

export default NotFound
