import Image from 'next/image'

import HeaderSection from '../../components/HeaderSection/HeaderSection'

import * as styles from './GallerySection.css'

const GallerySection = () => {
  return (
    <HeaderSection title="갤러리">
      <div className={styles.galleryContainer}>
        <Image
          src="/images/gallery1.png"
          alt="갤러리 이미지"
          width={168}
          height={114}
        />
        <Image
          src="/images/gallery2.png"
          alt="갤러리 이미지"
          width={168}
          height={114}
        />
      </div>
    </HeaderSection>
  )
}

export default GallerySection
