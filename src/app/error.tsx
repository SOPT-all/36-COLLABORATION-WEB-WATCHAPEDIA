'use client'

import { useRouter } from 'next/navigation'

import { PATH } from '@/shared/constants/path'
import Button from '@/shared/components/Button/Button'

import * as styles from './error.css'

const Error = () => {
  const router = useRouter()

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>
        문제가 발생했어요!
        <br />
        계속해서 문제가 발생한다면 관리자에게 문의해주세요 :(
      </p>
      <Button
        text="홈으로 이동"
        onClick={() => router.push(PATH.HOME, { scroll: true })}
      />
    </div>
  )
}

export default Error
