import Image from 'next/image'

import SvgIconPlay from '@/assets/svg/IconPlay'

import HeaderSection from '../../components/HeaderSection/HeaderSection'

import * as styles from './VideoSection.css'

const VideoSection = () => {
  return (
    <HeaderSection title="동영상">
      <div className={styles.videoContainer}>
        <Image
          src="/images/img_vid_1.png"
          alt="동영상"
          width={168}
          height={114}
        />
        <div className={styles.videoPlayerOverlay}>
          <SvgIconPlay width={20} height={20} />
        </div>
        <p className={styles.videoPlayerTitle}>메인 예고편</p>
      </div>
    </HeaderSection>
  )
}

export default VideoSection
