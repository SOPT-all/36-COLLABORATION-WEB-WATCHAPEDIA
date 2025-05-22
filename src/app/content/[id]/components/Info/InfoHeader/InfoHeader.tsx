'use client'

import { useRouter } from 'next/navigation'

import SvgBack from '@/assets/svg/Back'
import SvgShare from '@/assets/svg/Share'

import * as styles from './InfoHeader.css'

const InfoHeader = () => {
  const router = useRouter()

  return (
    <div className={styles.infoHeaderContainer}>
      <button
        type="button"
        className={styles.infoHeaderBackButton}
        onClick={() => router.back()}
      >
        <SvgBack width={22} height={22} />
      </button>
      <SvgShare width={24} height={24} />
    </div>
  )
}

export default InfoHeader
